
document.addEventListener("DOMContentLoaded", function() {
   
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    
    const viewWorkBtn = document.querySelector(".hero-buttons button:nth-child(1)");
    const contactBtn = document.querySelector(".hero-buttons button:nth-child(2)");

    if (viewWorkBtn) {
        viewWorkBtn.addEventListener("click", function() {
            scrollToSection("projects");
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function() {
            scrollToSection("contact");
        });
    }

    
    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    const emailLink = document.querySelector('a[href*="mailto:"]');

    if (linkedinLink) {
        linkedinLink.setAttribute("target", "_blank"); 
    } else {
        console.error("LinkedIn button not found!");
    }

    if (emailLink) {
        emailLink.setAttribute("target", "_blank");
        console.error("Gmail button not found!");
    }
});
