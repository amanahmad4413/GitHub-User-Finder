// Init Github
const github = new Github;

// Init UI
const ui = new UI;


// Search Input
const searchUser = document.getElementById('searchUser');

// Saech Input Event Listeners
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http Call
        github.getUser(userText)
        .then(data => {
          if(data.profile.message === 'Not Found') {
            
             // Show Alert
            ui.showAlert('User not found', 'alert alert-danger');

          } else {
            // Show Profile
            ui.showProfile(data.profile);

            // Show Repositories
            ui.showRepos(data.repos);
          }
        })

    } else {
        // Clear Profile
        ui.clearProfile();
    }
});