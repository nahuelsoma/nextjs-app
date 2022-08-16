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
