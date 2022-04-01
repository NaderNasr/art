# Preview



https://user-images.githubusercontent.com/35424606/161310130-f0553a00-bb48-47af-8f44-ec48986229d0.mov




# Getting Started

1 - ``` git clone git@github.com:NaderNasr/art.git ```

2 - ```npm install ```

3 - create a .env file in your root directory

  Below is an example API key from commerceJS

    REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec
4 - ``` npm start ```

  Upon running ```npm start``` the site will automagically run on desktop. You can also run this on your smart phone by following the guide below:


  - Go to Network/WiFi preferences:

  Find your machines local IP address:

  example:

  ```192.168.0.1```

  Make sure you're connected to the same wifi thats connected on your machine.
        Add the IP address to your phone's web browser following the port number.

  ```:3000```

  example result ```192.168.0.1:3000```

  You may follow this tutorial to create a merchant of your own:

  [CommerceJS React JS tutorial](https://commercejs.com/docs/guides/products-react#prerequisites)

  While you connect to the site you will get a security error:


      Warning: Potential Security Risk Ahead

Don't panic this is because HTTP is set to true ```HTTPS=true``` in our package.json file.

    "scripts": {
      "start": "HTTPS=true react-scripts start"
    }

https is required to allow the site to connect to the user's phone camera.

# Stack

 - React JS
 - Node JS
 - Stripe
 - ThreeJS
 - React Dom
 - React Three Fiber
 - Commerce.js
 - Material UI

#

If you have any questions or would like to contribute to this repo please feel free to contact us below:

Contributors | Github | LinkedIn
--- | --- | ---
Armin Glavovic | [Github](https://github.com/glavovic) | [LinkedIn](https://www.linkedin.com/in/glavovica/)
Gerard Compion | [Github](https://github.com/gerard-c) | [LinkedIn](https://www.linkedin.com/in/gerard-compion-37567b233/)
Nader Nasr | [Github](https://github.com/NaderNasr) | [LinkedIn](https://www.linkedin.com/in/nnasr/)

