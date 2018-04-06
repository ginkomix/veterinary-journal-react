import firebase from "firebase";

class Account {
  initializeBd = () => {
    var config = {
      apiKey: "AIzaSyBJqf0gLujy-LORi1oFG41JE040bx1F0RE",
      authDomain: "veterinary-333.firebaseapp.com",
      databaseURL: "https://veterinary-333.firebaseio.com",
      projectId: "veterinary-333",
      storageBucket: "veterinary-333.appspot.com",
      messagingSenderId: "509184734732"
    };
    firebase.initializeApp(config);
  };

  createUser = (login, password, inf) => {
    return new Promise((resolve, reject) => {
      let user = null;
      firebase
        .auth()
        .createUserWithEmailAndPassword(login.value, password.value)
        .then(() => {
          user = firebase.auth().currentUser;
          user.sendEmailVerification();
          return user;
        })
        .then(user => {
          user
            .updateProfile({
              displayName: JSON.stringify(inf)
            })
            .then(() => {
              resolve(user);
            });
        })
        .catch(error => {
          reject();
        });
    });
  };

  haveUser = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          if (user.displayName) {
            resolve(user);
          }
        }
        reject();
      });
    });
  };

  signIn = (login, password) => {
    // return new Promise((resolve, reject) => {
    //   console.log(login, password);
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(login, password)
    //     .then(user => {
    //       resolve(user);
    //     })
    //     .catch(() => {
    //       reject();
    //     });
    // });
    return firebase.auth().signInWithEmailAndPassword(login, password);
  };

  updateInformation = inf => {
    return new Promise(resolve => {
      let user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: JSON.stringify(inf)
        })
        .then(() => {
          resolve(user);
        });
    });
  };

  updatePhoto = (photo, user) => {
    return new Promise(resolve => {
      let metadata = {
        contentType: "image/jpeg"
      };
      firebase
        .storage()
        .ref()
        .child(user.email + "/ava.jpeg")
        .put(photo, metadata);
      let starsRef = firebase
        .storage()
        .ref()
        .child(user.email + "/ava.jpeg");
      starsRef.getDownloadURL().then(url => {
        user.updateProfile({
          photoURL: url
        });
      });
    });
  };

  signOut = () => {
    return new Promise(resolve => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve();
        });
    });
  };
}

export let account = new Account();
