import './index.css';

export default function contact() {
    // heading
    const heading = document.createElement('div');
    heading.classList.add('heading');
    
    const headingTitle = document.createElement('div');
    headingTitle.classList.add('heading-title');
    headingTitle.textContent = "SUPREME CAT CULT";

    const headingTabs = document.createElement('div');
    headingTabs.classList.add('heading-tabs');

    const tab1 = document.createElement('button');
    tab1.classList.add('tabs');
    tab1.id = 'home';
    tab1.innerHTML = 'Home';
    
    const tab2 = document.createElement('button');
    tab2.classList.add('tabs');
    tab2.id = 'menu';
    tab2.innerHTML = 'Menu';

    const tab3 = document.createElement('button');
    tab3.classList.add('tabs');
    tab3.id = 'contact';
    tab3.innerHTML = 'Contact';

    headingTabs.appendChild(tab1);
    headingTabs.appendChild(tab2);
    headingTabs.appendChild(tab3);

    heading.appendChild(headingTitle);
    heading.appendChild(headingTabs);

    // main
    const main = document.createElement('div');
    main.classList.add('main');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const mainContentTitle = document.createElement('div');
    mainContentTitle.classList.add('main-content-title');
    mainContentTitle.textContent = "CONTACT TODAY FOR A 1% DISCOUNT";

    const mainContentDescription = document.createElement('div');
    mainContentDescription.classList.add('main-content-description');

    mainContent.appendChild(mainContentTitle);
    mainContent.appendChild(mainContentDescription);
    mainContentDescription.innerHTML = "1223334444";

    main.appendChild(mainContent);

    // append both to 
    const content = document.getElementById("content");
    content.appendChild(heading);
    content.appendChild(main);

    // append all of them to the content within this function
    // have a clear current page function in index.js that runs all the time
}