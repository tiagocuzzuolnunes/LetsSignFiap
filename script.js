const ctaBtn = document.getElementById('ctaBtn');
const faceBtn = document.getElementById('faceBtn');
const faceSection = document.getElementById('faceSection');
const main = document.getElementById('main');
const tokenSection = document.getElementById('tokenSection');
const faceImage = document.getElementById('faceImage');
const faceImgContainer = document.getElementById('faceImgContainer');
const faceImgContWidth = faceImgContainer.offsetWidth;
const faceImgContHeight = faceImgContainer.offsetHeight;

function goToTokenRequest() {
    ctaBtn.addEventListener("click", (e) => {
        faceSection.scrollIntoView({ behavior: 'smooth' });
        console.log("clicou btn");
    });
    // faceBtn.addEventListener("click", (e) => {
    //     console.log("clicou btn")
    //     main.innerHTML += `<section id="tokenSection" style="width: 80%; max-width: 600px;"
    //         class="fundo-roxo-claro d-flex flex-column align-items-center p-4 mt-5">

    //         <article>
    //             <h2>
    //                 Aguardando a confirmação do Token de sua pessoa de confiança!
    //             </h2>
    //             <h4 class="py-2">Lembre-se que essa pessoa foi selecionada por você para essa tarefa!</h4>
    //             <h4 class="py-2">Tudo que ela precisa fazer é seguir o link recebido para confirmar sua assinatura!</h4>
    //             <h4 id="resendLink" style="color: gray; font-style: italic;text-decoration: underline;">Ele(a) não recebeu? Reenviar</h4>

    //             <button id="tokenBtn" class="btn botao-ciano mt-3">Confirmar Token</button>
    //         </article>

    //     </section>  `;
    //     const tokenSection = document.getElementById('tokenSection');
    //     tokenSection.scrollIntoView({ behavior: 'smooth' });
    //     const resendLink = document.getElementById('resendLink');
    //     resendLink.addEventListener("click", (e) => {
    //         alert("Token reenviado. Entre em contato com sua pessoa de confiança")
    //     });
    // });
}

function checkFace() {
    faceBtn.addEventListener("click", (e) => {
        console.log("clicou btn")
        faceImgContainer.style.width = faceImgContWidth + "px";
        faceImgContainer.style.height = faceImgContHeight + "px";
        faceImgContainer.innerHTML = `<div class="loader">
            <div class="checksign"></div>
        </div>
        <h5>Realizando reconhecimento...</h5>`;
        faceBtn.innerText = "Reconhecendo rosto...";
        setTimeout(() => {
            faceBtn.innerText = "Verificar token...";
        }, 8000)
        faceBtn.addEventListener("click", (e) => {
            console.log("clicou btn")
            main.innerHTML += `<section id="tokenSection" style="width: 80%; max-width: 600px;"
            class="fundo-roxo-claro d-flex flex-column align-items-center p-4 mt-5">

            <article>
                <h2>
                    Aguardando a confirmação do Token de sua pessoa de confiança!
                </h2>
                <h4 class="py-2">Lembre-se que essa pessoa foi selecionada por você para essa tarefa!</h4>
                <h4 class="py-2">Tudo que ela precisa fazer é seguir o link recebido para confirmar sua assinatura!</h4>
                <h4 id="resendLink" style="color: gray; font-style: italic;text-decoration: underline;">Ele(a) não recebeu? Reenviar</h4>

                <button id="tokenBtn" class="btn botao-ciano mt-3">Confirmar Token</button>
            </article>

        </section>  `;
            const tokenSection = document.getElementById('tokenSection');
            const tokenSectionWidth = tokenSection.offsetWidth;
            const tokenSectionHeight = tokenSection.offsetHeight;
            const tokenBtn = document.getElementById('tokenBtn');
            tokenSection.scrollIntoView({ behavior: 'smooth' });
            const resendLink = document.getElementById('resendLink');
            resendLink.addEventListener("click", (e) => {
                alert("Token reenviado. Entre em contato com sua pessoa de confiança")
            });
            tokenBtn.addEventListener("click", (e) => {
                console.log("clicou btn")
                tokenSection.style.width = tokenSectionWidth + "px";
                tokenSection.style.height = tokenSectionHeight + "px";
                tokenSection.innerHTML = `
                <h2>
                    Token confirmado!
                </h2>`
            })
        }, { once: true })
    }, { once: true })
}

function confirmToken() {

}
checkFace();

goToTokenRequest();