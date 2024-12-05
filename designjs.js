document.getElementById('photo').addEventListener('click', function(){

    const photoContainer = document.getElementById('photo-container');

    if (photoContainer.classList.contains('hidden'))
    {
        photoContainer.classList.remove('hidden');
        this.textContent = 'Hide Digital Art';
    } else {
        photoContainer.classList.add('hidden');
        this.textContent = 'Digital Art';
    }
});

