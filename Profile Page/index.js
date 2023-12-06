const content = {
    about: {
        judul: 'About',
        desk: 'Hello My Name Is Aldi Prasetyo Widodo. I\'m a web developer and I am currently studying at Universitas Pendidikan Indonesia.'
    },
    contact: {
        judul: 'Contact',
        desk: 'Follow Me On Instagram, aldiprasetyo.__'
    },
    experience: {
        judul: 'Experience',
        desk: 'I attended several training courses provided by Dicoding, MySkill and others.'
    }
}

const oCnt = document.querySelectorAll(".object");
const cCnt = document.querySelector("#content");

oCnt.forEach(object => {
    object.addEventListener('click', () => {
        const id = object.id;
        let judul, desk;
        switch (id) {
            case 'about':
                judul = content.about.judul;
                desk = content.about.desk;
                break;
            case 'contact':
                judul = content.contact.judul;
                desk = content.contact.desk;
                break;
            case 'experience':
                judul = content.experience.judul;
                desk = content.experience.desk;
                break;
        }

        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.textContent = judul;
        p.textContent = desk;

        h1.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        p.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        
        cCnt.innerHTML = '';
        cCnt.appendChild(h1);
        cCnt.appendChild(p);
    })
})