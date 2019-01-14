const labs = document.querySelectorAll('.lab');
dropdownToggle = (e) => {
    const item = e.currentTarget;
    
    if ( item.classList.contains('lab')) {
       if ( !item.classList.contains('active') ) {

        document.querySelector('.lab.active') ?
            document.querySelector('.lab.active').classList.remove('active') : null;

        item.classList.add('active');
       }
    }
}; 


(() => {
    [...labs].map(lab => {
        lab.addEventListener('click' , dropdownToggle)
        lab.querySelector('.toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            const currentLab = e.currentTarget.closest('.lab');
            if (currentLab.classList.contains('active')) { 
                currentLab.classList.remove('active'); 
            } else {
                currentLab.classList.add('active'); 
            }
        });
    });
})()
