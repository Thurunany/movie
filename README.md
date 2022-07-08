<div align="center">
<h1> 🎬 Movie Web Aplication 🎬 </h1>
</div>

## Overview
Hi! Welcome to my project, this is actually a web developer challenge that I'm doing for a job aplication!

In that case, if You're the person that evaluate this aplication I hope You find everything that was asked of me 
and with any questions please send an email.

And in case You just happen to stumble throught here, feel free to see what I've had the pleasure of building 🤗

## Project Description
This project is a web popular movies catalogue. In here You can move trought most popular movies in the day, search for any specific favorite and see the information about them! 

For this project I used the <a href="https://www.themoviedb.org/"> The Movie Database API </a> to get all information I needed, integrated with technology of Vue.JS CLI, used the CSS's framework Vuetify and Boostrap and applied all of the steps made with Git on Github.

See the completed project here: http://movieapp-thuany.surge.sh/


## Project setup
### First step to have this code on your local system:

- Ensure [Node.js  >=5.10](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system

1. Install this code on your local system
    
    1. Fork this repository (click 'Fork' button in top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/[your_username]/movie.git
        ```  
   
2. Change into directory

    ```
    cd movie
    ```
    
3. Install dependencies

    ```
    npm install
    ```

4. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Edit the .env file and replace any variables if needed
    
5. Start project

    ```
    npm run start
    ```

Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

-------------
## How to do this project:

1. Right from the start we will use the tools that Vue CLI give to us, so lets see how to install Vue first:
    
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
- Be aware that Vue CLI 4.x requires [Node.js](https://nodejs.org/en/download/) version 8.9 or above (v10+ recommended). 
- You can manage multiple versions of Node on the same machine with n, nvm or nvm-windows.

2. Checking the version:
```
vue --version
``` 
3. And now, Upgrading:
```
npm update -g @vue/cli
# OR
yarn global upgrade --latest @vue/cli
```

4. Let's create a new project:
```
vue create [project_name]
``` 

5. You will be prompted to pick a preset:


![image](https://user-images.githubusercontent.com/50593898/177969588-0182a3a7-45dd-4456-a176-4774f8f2be52.png)


- For this one I used: Default([Vue 2] babel, eslint)


6. And then It's done, You installed Vue CLI! You just have enter the project paste (We are half way there!) 
```
cd [project_name]
```
------

7. Let's add [Vuetify](https://vuetifyjs.com/en/), a framework for app customization 

```
vue add vuetify
```
- You will be prompted to pick a preset! For this project I used the default version.

-------

8. Now let's install the [Boostrap](https://getbootstrap.com/) a css framework that I used to customize my aplication:
```
npm install bootstrap@5.2.0-beta1
```

- Be aware of the latest versions! 
------------
9. Install [axios](https://axios-http.com/ptbr/docs/intro), aplication to do your requisitions
```
npm install --save axios vue-axios
```
-------
10. You'll also need to know these feel yarn aplication:

- Install
```
yarn install
```

- Compiles and hot-reloads for development
```
yarn serve
```

- Compiles and minifies for production
```
yarn build
```
- After using this command for the first time It will create a /dist file in your project.
- To Deploy my aplication I used /dist file with the Surge command, that's how You do It:

```
yarn build
```
```
cd dist
```
```
surge
```
- Input your email and password, and It's done! 
----
- Lints and fixes files
```
yarn lint
```

-----

11. And It's done! Run your code with:
```
npm run serve
```
