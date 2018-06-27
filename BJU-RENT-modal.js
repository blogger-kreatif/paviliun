  
          jQuery(document).on('click', '.trigger-modal', function(e) {

            // this line just in case the button on the page has some other function, 
            // not really necessary but just for safety
            e.preventDefault()

            // This scrolls the page to the top so the modal is in view when it appears
            window.scrollTo(0,0)

            // Fade in both the overlay and the modal itself
            jQuery('.modal-overlay').fadeIn()
            jQuery('.modal-content').fadeIn()


          })

          jQuery(document).on('click', '.close-me', function(e) {

            // this line just in case the button on the page has some other function, 
            // not really necessary but just for safety
            e.preventDefault()

            // Fade out the modal and the overlay
            jQuery('.modal-overlay').fadeOut()
            jQuery('.modal-content').fadeOut()

          })
 
