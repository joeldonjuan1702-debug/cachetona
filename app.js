const boton = document.getElementById("abrirCarta");

// Corazones flotantes
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💗";
    corazon.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

setInterval(crearCorazon, 800);


// Abrir la carta
boton.addEventListener("click", function() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="inicio">

            <h1>Para mi cachetona hermosa 💗</h1>

            <div class="stitch">
                <img src="imagenes/stitch.jpg" alt="Stitch y Angel">
            </div>

            <div class="frase">

                <p>Mi cachetona hermosa, no tienes idea
                de lo feliz que me hace tenerte en mi vida 🥹💗</p>

                <p>Quiero que sepas que eres una persona
                demasiado especial para mí, desde que
                llegaste a mi vida muchas cosas cambiaron
                y no sabes cuánto agradezco tenerte a mi lado</p>

                <p>Me encanta pasar tiempo contigo, hablar
                contigo, reírnos de cualquier tontería y
                compartir esos pequeños momentos que
                para mí significan muchísimo</p>

                <p>Sé que no soy perfecto y que tampoco
                puedo darte todo lo que quisiera,
                pero quiero que nunca dudes de lo mucho
                que te amo y de las ganas que tengo
                de hacerte feliz</p>

                <p>Quiero seguir creando recuerdos contigo,
                cumplir muchas cositas a tu lado y
                seguir compartiendo esta historia tan bonita</p>

                <p>Gracias por ser tú, por tus ocurrencias,
                tus sonrisas y por cada momento que me regalas</p>

                <p>TE AMOOO MUCHÍSIMO MI CACHETONA,
                MI NIÑA HERMOSAAAA 🥹💗</p>

                <p>Y todavía tengo unos recuerditos
                que quiero enseñarte...</p>

            </div>

            <button id="verFotos">Ver nuestros recuerdos 📸</button>

        </section>
    `;

    document.getElementById("verFotos").addEventListener("click", mostrarFoto);

});


// Fotografías
const recuerdos = [
    {
        foto: "foto1.jpeg",
        frase: "Me encanta poder compartir momentos contigo, incluso las pequeñas tonterías se vuelven recuerdos que quiero guardar para siempre 💗"
    },
    {
        foto: "foto2.jpeg",
        frase: "JAJAJA, nunca nos faltan las ocurrencias, y si algo tengo claro es que contigo hasta el momento más absurdo se vuelve especial 😂"
    },
    {
        foto: "foto3.jpeg",
        frase: "Entre tantos días y tantas cosas que pasan, qué bonito es coincidir contigo y poder crear nuestra propia historia 💙"
    },
    {
        foto: "foto4.jpeg",
        frase: "Hay momentos que quisiera pausar para disfrutarlos un poquito más, porque estar contigo siempre tiene algo especial 🥹"
    },
    {
        foto: "foto5.jpeg",
        frase: "Y si pudiera volver a vivir todos estos momentos, volvería a elegir cada uno de ellos, porque todos tienen algo en común, tú 💗"
    }
];

let numeroFoto = 0;


// Mostrar fotografías
function mostrarFoto() {

    const app = document.getElementById("app");

    if (numeroFoto < recuerdos.length) {

        const recuerdo = recuerdos[numeroFoto];

        app.innerHTML = `
            <section class="inicio">

                <h1>Nuestros recuerditos 💗</h1>

                <p>Recuerdo ${numeroFoto + 1} de 5</p>

                <div class="foto-recuerdo">
                    <img src="${recuerdo.foto}" alt="Nuestro recuerdo">
                </div>

                <div class="frase">
                    <p>${recuerdo.frase}</p>
                </div>

                <button id="siguienteFoto">
                    ${numeroFoto === 4 ? "Terminar nuestros recuerdos 💗" : "Siguiente recuerdo 💌"}
                </button>

            </section>
        `;

        numeroFoto++;

        document.getElementById("siguienteFoto").addEventListener("click", mostrarFoto);

    } else {

        app.innerHTML = `
            <section class="inicio">

                <h1>Un pedacito de mi corazón para tii 💗</h1>

                <div class="stitch">
                    <img src="imagenes/stitch.jpg" alt="Stitch y Angel">
                </div>

                <h2>Mi cachetona hermosa 🥹</h2>

                <div class="frase">
                    <p>Y esto apenas es un pedacito de todo
                    lo bonito que quiero vivir contigo 💙</p>

                    <p>TE AMOOO MUCHOOOO MI NIÑA HEMOSHAA 💗</p>
                </div>

                <button id="abrirRegalo">Tengo algo más para ti 🎁</button>

            </section>
        `;

        document.getElementById("abrirRegalo").addEventListener("click", sorpresaFinal);
    }
}


// Última sorpresa
function sorpresaFinal() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="inicio">

            <h1>Una última cosita para tiii 💗</h1>

            <h2>Para mi cachetona hermosa 🥹</h2>

            <div class="regalo">
                🎁
            </div>

            <p>Hay algo más que quiero regalarte...</p>

            <button id="abrirCajita">Abrir mi regalito 💌</button>

        </section>
    `;

    document.getElementById("abrirCajita").addEventListener("click", abrirCartaSecreta);
}


// Carta secreta
function abrirCartaSecreta() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="inicio">

            <h1>¡SORPRESAAAA! 💗</h1>

            <div class="stitch">
                <img src="imagenes/stitch.jpg" alt="Stitch y Angel">
            </div>

            <div class="frase">

                <h2>Mi cachetona preciosa 🥹💗</h2>

                <p>
                    Si llegaste hasta aquí quiero que sepas
                    que cada cosita que hice fue pensando en ti
                </p>

                <p>
                    No necesito tener miles de cosas para
                    demostrarte cuánto te amo, porque lo que
                    más quiero es seguir compartiendo mi vida contigo
                </p>

                <p>
                    Quiero muchos más recuerdos, muchas risas,
                    muchas aventuras y muchísimos días a tu lado
                </p>

                <p>
                    Eres mi niña hermosa y siempre voy a estar
                    agradecido por tenerte en mi vida
                </p>

                <p>
                    TE AMOOOO MI CACHETONA HEMOSHAAAA
                    🥹💗💗💗
                </p>

            </div>

            <h2>Con muchísimo amor, para ti 💗</h2>

        </section>
    `;
}