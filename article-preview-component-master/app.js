
const inactiveShareIcon = document.getElementById('share-icon-inactive');
const activeShareIcon = document.getElementById('share-icon-active');
const popupSocialIcons = document.getElementById('popup');


inactiveShareIcon.addEventListener('click', () => {
    popupSocialIcons.classList.remove('hidden');
    inactiveShareIcon.classList.add('hidden');
    activeShareIcon.classList.remove('hidden');

});

activeShareIcon.addEventListener('click', () => {
    popupSocialIcons.classList.add('hidden');
    inactiveShareIcon.classList.remove('hidden');
    activeShareIcon.classList.add('hidden');
});


const ssAvatar = document.querySelector('.ss-avatar');
const ssAuthorName = document.querySelector('.ss-author h2');
const ssDate = document.querySelector('.ss-author p');
const ssPopupSocialIcons = document.getElementById('ss-popup');
const ssInactiveShareIcon = document.getElementById('ss-share-icon-inactive');
const ssActiveShareIcon = document.getElementById('ss-share-icon-active');

ssInactiveShareIcon.addEventListener('click', () => {
    ssPopupSocialIcons.classList.remove('hidden');
    ssInactiveShareIcon.classList.add('hidden');
    ssActiveShareIcon.classList.remove('hidden');
    ssAvatar.classList.add('hidden');
    ssDate.classList.add('hidden');
    ssAuthorName.classList.add('hidden');
});

ssActiveShareIcon.addEventListener('click', () => {
    ssPopupSocialIcons.classList.add('hidden');
    ssInactiveShareIcon.classList.remove('hidden');
    ssActiveShareIcon.classList.add('hidden');
    ssAvatar.classList.remove('hidden');
    ssDate.classList.remove('hidden');
    ssAuthorName.classList.remove('hidden');
});





































/*const mediaQuery = window.matchMedia('(max-width: 700px)');


inactiveShareIcon.addEventListener('click', () => {
    console.log('i work');
    //popupSocialIcons.classList.remove('hidden');
    //popupSocialIcons.classList.add('share');
    popupSocialIcons.classList.toggle('hidden');
    inactiveShareIcon.classList.toggle('hidden');
    activeShareIcon.classList.toggle('hidden');
    console.log(popupSocialIcons.classList);
});

activeShareIcon.addEventListener('click', () => {
    popupSocialIcons.classList.toggle('hidden');
    inactiveShareIcon.classList.toggle('hidden');
    popupSocialIcons.classList.add('hidden');
    activeShareIcon.classList.toggle('hidden');
});


//if(mediaQuery.matches && !popupSocialIcons.classList.contains('hidden')) {
    //popupSocialIcons.classList.toggle('hidden');

    //popupSocialIcons.classList.toggle('hidden');
    //inactiveShareIcon.addEventListener('click', () => {
        //authorSection.style.display = 'none';
        //inactiveShareIcon.classList.toggle('hidden');
        //activeShareIcon.classList.toggle('hidden');
       
        //avatar.classList.toggle('hidden');
        //date.classList.toggle('hidden');
        //authorName.classList.toggle('hidden');
    //});
//} else {
  // console.log('do nothing');  
//}


/*const handleSmallerScreen = (e) => {
    if(mediaQuery.matches && !popupSocialIcons.classList.contains('hidden')) {
        popupSocialIcons.classList.add('hidden');
        inactiveShareIcon.classList.toggle('hidden');
        activeShareIcon.classList.add('hidden');
        //authorSection.style.display = 'none';
    } else if (mediaQuery.matches) {

         inactiveShareIcon.addEventListener('click', () => {
            avatar.classList.add('hidden');
    });

        //authorSection.style.display = 'flex';
    }
};

const handleSmallerScreen = (e) => { 
    if (e.matches) 
        { if (!popupSocialIcons.classList.contains('hidden'))
            { popupSocialIcons.classList.add('hidden'); 
            inactiveShareIcon.classList.remove('hidden'); 
            activeShareIcon.classList.add('hidden'); 
        } else { 
            inactiveShareIcon.addEventListener('click', hideAuthorDetails);
             
        } } else { 
            avatar.classList.remove('hidden'); 
            date.classList.remove('hidden'); 
            authorName.classList.remove('hidden'); 
            activeShareIcon.classList.add('hidden');
            console.log('do nothing'); 
           inactiveShareIcon.removeEventListener('click', hideAuthorDetails);
    } };

    const hideAuthorDetails = () => { 
        avatar.classList.add('hidden'); 
        date.classList.add('hidden'); 
        authorName.classList.add('hidden'); 
        activeShareIcon.classList.remove('hidden');
    };


handleSmallerScreen(mediaQuery);

mediaQuery.addEventListener('change', handleSmallerScreen);

*/







