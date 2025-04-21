                    // when the window "load" event fires (i.e. preloader is done),
                    // show our popup:
                    window.addEventListener('load', () => {
                        setTimeout(() => {
                            document.querySelector('.welcome-modal__overlay').style.display = 'block';
                            document.querySelector('.welcome-modal__body').style.display = 'block';
                        }, 6500);
                        });
                  
                    // a single function to hide both overlay & modal
                    function hideModal() {
                      document.querySelector('.welcome-modal__overlay').style.display = 'none';
                      document.querySelector('.welcome-modal__body').style.display = 'none';
                    }
                  
                    // close on clicking the × button
                    document.querySelector('[data-ref="close"]')
                      .addEventListener('click', hideModal);
                  
                    // close on clicking anywhere on the overlay
                    document.querySelector('.welcome-modal__overlay')
                      .addEventListener('click', hideModal);
