## Installing NextJS

### Manually

Create project folder, and inside the project folder run

```
npm init -y
```

```
npm i next react react-dom
```

Add into `package.json` scripts

```js
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Create `pages` file

```
mkdir pages
```

Run project

```
npm run dev
```

### Automatic Setup

```
npx create-next-app@latest <project-name>
```

## Basic routes

Create index and about pages files (file system routing)

```
/pages/index.js
/pages/about.js
```

## Dynamic routes

📖 https://nextjs.org/docs/routing/dynamic-routes

Using `[ <param> ].js` files

For example:

Create file:

```
/pages/product/[id].js
```

For fast React component creation use `rafce` shortcode in VSCode

```js
import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()

  return <div>ProductItem: {router.query.id}</div>
}

export default ProductItem
```

## Link

```js
import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
```

```js
import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <p>Home</p>
    </div>
  )
}

export default Home
```

## Install Dependencies

```
npm i typescript @types/react @types/node husky prettier pretty-quick -D
```

```
npm i @types/cors cors semantic-ui-css semantic-ui-react isomorphic-unfetch
```

## Custom document and app

Custom document: Applies modifications to html tag

📖 https://nextjs.org/docs/advanced-features/custom-document

Custom app: Applies modifications into the body

📖 https://nextjs.org/docs/advanced-features/custom-app

## Add aliases paths

Into `tsconfig.json` file

```ts
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@database": ["database/db.ts"],
      "@cors": ["./cors-middleware.ts"],
      "@components/*": ["components/*"]
    },
  },
}
```

In certain ocations, TypeScript server must be restarted: Press F1 in VSCode and type "TypeScript: Restart TS Server" to find and execute the command.

## CSS Styles

### 1. Global CSS (.css)

1. Create `style.css` file in root dir (it can be named as wanted)
2. Import the css file into the `_app.tsx` file
3. Use classes into components

### 2. CSS Modules (.module.css)

1. Create `style.module.css` file in component dir
2. Import the module.css file into the component file
3. Use classes only into this component with {styles.property}

_CSS Modules creates hashes for every property to avoid colision_

### 3. CSS-in-JS - Styled JSX (Next.js - Vercel)

Using template literal into the component JSX (or TSX) file

```jsx
<style jsx>{`
  .container {
    margin: 30px 0;
    border: 1px solid lightgray;
    border-radius: 1rem;
  }
`}</style>
```

And adding into the html tags of the component with `ClassName` property

_Styled JSX creates hashes for every property to avoid colision_
