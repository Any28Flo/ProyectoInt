class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
           `<footer id="footer" class="text-white bg-dark">
                <div class="container-fluid pt-3">
                    <div class="row">
                        <!--Never Dies logo-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 text-center my-auto">
                            <a href="../index.html">
                                <img src="../src/img/logonev.png" alt="Never Dies logo" width="34%">
                            </a>
                        </div>

                        <!--contacts-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6">
                            <ul class="list-unstyled p-0">
                                <li>
                                    <i class="bi bi-instagram text-white icon-size"></i>
                                    <a href="https://www.instagram.com/neverdiesoficial/" target="_blank">/neverdiesco</a>
                                </li>
                                <li>
                                    <i class="bi bi-facebook text-white icon-size"></i>
                                    <a href="https://www.facebook.com/NeverDiesCo/" target="_blank">NeverDiesCo</a>
                                </li>
                                <li>
                                    <i class="bi bi-whatsapp text-white icon-size"></i>
                                    <a href="https://wa.me/+5215612649334" target="_blank">+52 1 56 1264 9334</a>
                                </li>
                                <li>
                                    <i class="bi bi-envelope text-white icon-size"></i>
                                    <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 my-auto">
                            <ul class="list-unstyled p-0">
                                <li>
                                    <i class="bi bi-people-fill text-white icon-size"></i>
                                    <a href="./../pages/quienesSomos.html">¿QUIÉNES SOMOS?</a>
                                </li>
                                <li>
                                    <i class="bi bi-layer-backward text-white icon-size"></i>
                                    <a href="../src/catálogo_never_dies_co.pdf" download>DESCARGAR CATÁLOGO</a>
                                </li>
                            </ul>
                        </div>

                        <!--In Code logo-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 my-auto">
                            <div class="text-center">
                                <p>Sitio creado por:</p>
                            </div>
                            <div class="text-center">
                                <a href=".././pages/nosotros.html" class="">
                                    <img src="../src/img/logoInCodeWeb.png" class="" alt="In Code logo" width="65%">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <!--copyright-->
                <div class="row">
                    <p class="text-center">Copyright &copy; NeverDiesCo. 2021</p>
                </div>
                </div>
            </footer>`
    }
}

customElements.define('my-footer', theFooter)