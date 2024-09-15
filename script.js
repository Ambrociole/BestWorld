document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const fileList = document.getElementById('fileList');
    const fileDetail = document.getElementById('fileDetail');
    const fileImage = document.getElementById('fileImage');
    const fileName = document.getElementById('fileName');
    const fileDescription = document.getElementById('fileDescription');
    const fileDownload = document.getElementById('fileDownload');
    const closeDetail = document.getElementById('closeDetail');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const file = fileInput.files[0];
        const name = nameInput.value;
        const description = descriptionInput.value;

        if (file && name && description) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100px';
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => {
                    fileImage.src = e.target.result;
                    fileName.textContent = name;
                    fileDescription.textContent = description;
                    fileDownload.href = e.target.result;
                    fileDetail.style.display = 'block';
                });

                const listItem = document.createElement('li');
                listItem.appendChild(img);
                listItem.appendChild(document.createTextNode(` ${name}`));
                fileList.appendChild(listItem);
            };
            reader.readAsDataURL(file);
        }
    });

    closeDetail.addEventListener('click', () => {
        fileDetail.style.display = 'none';
    });
});
