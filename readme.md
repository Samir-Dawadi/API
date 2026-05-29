



```json
  {
      "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist",

        "module": "CommonJS",
        "target": "ES2020",
        "lib": ["ES2020"],
        "types": ["node"],
        "moduleResolution": "node",

        "strict": true, 
        "esModuleInterop": true,
        "allowJs": true,

        "isolatedModules": true,
        "skipLibCheck": true,
        "sourceMap": true, 
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
  }





  {
  "compilerOptions": {
      "rootDir": "./src",
      "outDir": "./dist",

      "module": "ESNext",
      "target": "ESNext",
      "types": ["node"],
      "lib": ["ESNext"],

      "strict": true, 
      "esModuleInterop": true,
      "allowJs": true,
      "isolatedModules": true,
      "skipLibCheck": true,
      "sourceMap": true, 
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true,

      "allowImportingTsExtensions": true,
      "noEmit": true, 
      "moduleResolution": "bundler"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

```

## Server Architecture 
  - code communicate
  - `Database FE integration`
  - `RAD` - `MVC pattern`
  - `Monolithic` or `micro-service`

  - Ecommerce features 
    - category
    - user
    - product 
    - logistic 
    - payment 
    - blogs 
    - offers 
    - reporting 

## MVC - 3-tire architecture 
```txt
                Data Layer (DB server, Model)


          Business Layer/logical Layer  (Server Side Application/ Controller)


            View/ Presentation Layer  (View, React or FE/ json response )
```
```js
  /**
   * 
   * /src
   *    app/
   *      /auth/
   *        auth.model.ts
   *        auth.controller.ts
   *        auth.services.ts
   *        auth.router.ts
   *      /user/
   * 
   * 
   *    model/  
   *      auth.model.ts
   *    controller/
   *      auth.controller.ts
   *    router/
   *      auth.router.ts
   *    services/
   *      auth.services.ts
   * 
   *    app.ts
   *    server.ts
   * */
```

## Module 
  ### Authentication & Authorization (`Auth Module`)
  - **Features**
    - `Register`
      - `/auth/register method=> post`
    - `Activation (optional)`
      - `/auth/activate-account method=>get/post`
    - `Resend-Activation(optional)`
        - `/auth/resent-activation method=>get/post`
    - `Login`
      - `/auth/login method => post`
    - `Logout`
      - `/auth/logout method => post`
    - `Forget Password`
      - `/auth/forget-password method => post` 
    - `Re-send forget token`
      - `/auth/resent-forget-token method => post`
    - `Reset Password`
      - `/auth/reset-password method => post`
    - `Access to Dashboard`
      - `/auth/me method => get`
  ### Category (`Category Module`)
  - **Features**
    - Create Category
      - `/category    method => post`
    - List all Categories
      - `/category    method => get`
    - View Category Detail
        - `/category/123    method => get`
    - Update Category
        - `/category/123    method => patch/put`
    - Delete Category
        - `/category/123    method => delete`
  - **Requirement**
    - Router 
    - Controller 
    - for category