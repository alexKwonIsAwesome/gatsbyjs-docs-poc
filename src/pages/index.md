import SEO from '../components/SEO';
import { Tabs, Tab } from 'oah-ui';
import MdxCard from '../components/MdxCard';

<SEO title="Home Page" />

<MdxCard>

## Image test

<img src="/OAH.png" alt="logo" />

## blockquote

> NOTE: Format test

## Links

[Internal Link](/)

[External Link](https://github.com/AhmedElywa/gatsbyjs-docs-starter)

## MD Card

<MdxCard>

## test Content

```js
import MdxCard from '../components/MdxCard';
```

</MdxCard>

## Tabs

<Tabs>
<Tab icon="eye-outline" title="Tab 1" >

```
tab content 1
```

</Tab>
<Tab icon="settings-outline" title="Tab 2" >

```
tab content 2
```

</Tab>
</Tabs>

## OAH UI

It's React UI components packages you can see full components and how to use them from here [https://oah-ui.ahmedelywa.com/getting-started](https://oah-ui.ahmedelywa.com/getting-started)

## Add more pages

Add your md file inside `src/pages` then add to menu inside `src/Layouts/menuItem.ts`

## Make React component examples

[Example](demo://../components/Buttons.tsx)

</MdxCard>
