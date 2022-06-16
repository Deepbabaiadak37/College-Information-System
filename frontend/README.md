TESTING PURPOSE

USERNAME:	susi@gmail.com
PASSWORD:	susi12345	


ADMIN:      admin@cemk.ac.in
PASSWORD:   admin123

USER:       babai adak 
EMAIL:      cse1809@cemk.ac.in
PASSWORD:   babaiadak


USER:       Reshma Mandana 
EMAIL:      cse1810@cemk.ac.in
PASSWORD:   reshma123

regex-email:      [a-t]+[0-9]+@[c-m]+\.[a-c]+\.[i-n]{2,3}

import toast, { Toaster } from 'react-hot-toast';

<!--

<Toaster  position="top-right" reverseOrder={false}  />


-->
            toast("All Fields are Mandatory !!", {
                duration: 2000,
                position: 'top-center',
                // Styling
                style: {
                    padding: '20px',
                    fontWeight: '700',
                    width:'100%',
                    backgroundColor:' #f80759',
                    color:'white'
                },
                className: '',
                // Custom Icon
                icon: '⚠',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000'
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });



 toast('tick screen !!', {
            duration: 2000,
            position: 'top-center',
            // Styling
            style: {
                padding: '20px',
                fontWeight: '700',
                width:'100%',
                backgroundColor:'#00c851',
                color:'white'
            },
            className: '',
            // Custom Icon
            icon: '✅',
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000'
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
