// logout.js

// Fonction de déconnexion
function logout() {
    // Supprimer les données de session dans localStorage ou sessionStorage
    localStorage.removeItem("user");   // Si vous utilisez localStorage pour enregistrer l'utilisateur
    sessionStorage.removeItem("user"); // Si vous utilisez sessionStorage pour enregistrer l'utilisateur

    // Afficher un message de confirmation de déconnexion
    alert("Vous avez été déconnecté.");

    // Attendre 3 secondes avant de rediriger vers la page de connexion
    setTimeout(function() {
        // Rediriger vers la page de connexion après 3 secondes
        window.location.href = "login.html"; // Modifier si vous avez une autre page de connexion
    }, 3000); // 3000 ms = 3 secondes
}

// Appeler la fonction de déconnexion immédiatement lors du chargement de la page
logout();
