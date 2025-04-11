let script = document.createElement('script')
script.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      // Set default consent to 'denied' as a placeholder
      // Determine actual values based on your own requirements
      gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'denied',
      });`
document.getElementsByTagName('head')[0].appendChild(script);

let script3 = document.createElement('script')
script3.type = 'text/plain';
script3.setAttribute('data-category', 'analytics');
script3.src = 'https://www.googletagmanager.com/gtag/js?id=G-34T6Q5NL0V';
document.getElementsByTagName('head')[0].appendChild(script3);

let script4 = document.createElement('script')
script4.type = 'text/plain';
script4.setAttribute('data-category', 'analytics');
script4.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-34T6Q5NL0V');`
document.getElementsByTagName('head')[0].appendChild(script4);