```console
npm init -y
npm install next react react-dom
mkdir pages && touch /pages/index.js
```

**npm init** will create package.json file we need to add the script in it

```json
"script":{
    "dev":"next dev",
    "build":"next build",
    "start":"next start"
}
```

and we must create pages directory and index.js in it.

```console
npm run dev
```

## \_app :

it is a component can recieve other components and their props on the page

## Link :

it is client site component instead of using href within a tag so the page won't update in the server

## [].js :

dynamic routing

```json
"scripts":{
    "export":"next export"
    }
```

npm run export create static pages onlt includes js, css and html in /out folder

- link to explain --> https://stackoverflow.com/questions/61724368/what-is-the-difference-between-next-export-and-next-build-in-next-js
