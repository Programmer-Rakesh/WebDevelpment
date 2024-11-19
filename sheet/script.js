const scriptURL = 'https://script.google.com/macros/s/AKfycbygdx8VG19nu7b-PVRLFmuH01NX6VhhT90ERQfr5rOdwNPBGE6CWnF1MtCHX3SohjWZLQ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('Submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })