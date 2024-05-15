// =======================================================
// * APP Name: OperationCaribbeanSummer
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

// const hrLogoCubaSvg = document.querySelectorAll('#Cuba-logo_1');
// hrLogoCubaSvg.addEventListener('mouseenter', () => {
//     hrLogoCubaSvg.style.fill = '#ff0000';
// });
// hrLogoCubaSvg.addEventListener('mouseout', () => {
//     Havano.style.fill = '#10324E';
// });

<<<<<<< Updated upstream
=======


// Inyect static info - banner + nav + footer
function addInfo() {
let JaviRamosLabBanner = '<img src="img/banner/57 Capablanca in Memoriam 2024 - banner.png" alt="Capablanca in Memoriam 2024 - banner" width="90%"></img>'
let JaviRamosLabNav = `<!-- NAV - nav.html -->
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="./">
      <img src="./img/capablanca-2024/faicon.png" alt="" width="24" height="24">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>

          <!-- links -->
          <li class="nav-item">
            <a class="nav-link" href="./webdev.html"> Web development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./design.html"> Design/Branding</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./marketing.html"> Digital marketing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./analitics.html"> Analitics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./translation.html"> Translation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./wikipedia.html"> Wikipedia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./services.html"> All services</a>
          </li>
  
          <!-- Dropdown - About -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            About
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <!-- <li><a class="dropdown-item" href="about"><img src="./icons/about.svg" alt="" height="20px"> About</a></li> -->
              <li><a class="dropdown-item" href="team.html"><img src="./icons/code.svg" alt="" height="20px"> Team</a></li>
              <li><a class="dropdown-item" href="download.html"><img src="./icons/download.svg" alt="" height="20px"> Download</a></li>
              <li><a class="dropdown-item" href="contact-us.html"><img src="./icons/mail-opened-filled.svg" alt="" height="20px"> Contact us</a></li>
            </ul>
          </li>
          
            <span class="align-items-end">
              <img src="img/langs/en.png" alt="en" width="16px" height="11px">
              <img src="img/langs/es.png" alt="es" width="16px" height="11px">
              <img src="img/langs/eo.png" alt="eo" width="16px" height="11px">
            </span>
  
        </ul>
      </div>
    </div>
    </nav>
  
  <!-- SUBNAV -->
  <!-- START - SUBNAV -->
  <ul class="nav nav-pills bg-dark justify-content-center">

    <!-- Dropdown - Torneos Capablanca -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Capablanca Tournaments
      </a>
      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-tournaments.html">Capablanca Tournaments</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2025.html">Capablanca in Memoriam 2025</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1962.html">Capablanca in Memoriam 1962</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1963.html">Capablanca in Memoriam 1963</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1964.html">Capablanca in Memoriam 1964</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1965.html">Capablanca in Memoriam 1965</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1967.html">Capablanca in Memoriam 1967</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1968.html">Capablanca in Memoriam 1968</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1969.html">Capablanca in Memoriam 1969</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1971.html">Capablanca in Memoriam 1971</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1972.html">Capablanca in Memoriam 1972</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1973.html">Capablanca in Memoriam 1973</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1974.html">Capablanca in Memoriam 1974</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1975.html">Capablanca in Memoriam 1975</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1976.html">Capablanca in Memoriam 1976</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1977.html">Capablanca in Memoriam 1977</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1979.html">Capablanca in Memoriam 1979</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1980.html">Capablanca in Memoriam 1980</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1981.html">Capablanca in Memoriam 1981</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1983.html">Capablanca in Memoriam 1983</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1984.html">Capablanca in Memoriam 1984</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1985.html">Capablanca in Memoriam 1985</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1986.html">Capablanca in Memoriam 1986</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1987.html">Capablanca in Memoriam 1987</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1988.html">Capablanca in Memoriam 1988</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1989.html">Capablanca in Memoriam 1989</a></li>

        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1990.html">Capablanca in Memoriam 1990</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1991.html">Capablanca in Memoriam 1991</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1992.html">Capablanca in Memoriam 1992</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1993.html">Capablanca in Memoriam 1993</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1994.html">Capablanca in Memoriam 1994</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1995.html">Capablanca in Memoriam 1995</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1996.html">Capablanca in Memoriam 1996</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1997.html">Capablanca in Memoriam 1997</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1998.html">Capablanca in Memoriam 1998</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-1999.html">Capablanca in Memoriam 1999</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2000.html">Capablanca in Memoriam 2000</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2001.html">Capablanca in Memoriam 2001</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2002.html">Capablanca in Memoriam 2002</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2003.html">Capablanca in Memoriam 2003</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2004.html">Capablanca in Memoriam 2004</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2005.html">Capablanca in Memoriam 2005</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2006.html">Capablanca in Memoriam 2006</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2007.html">Capablanca in Memoriam 2007</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2008.html">Capablanca in Memoriam 2008</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2009.html">Capablanca in Memoriam 2009</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2010.html">Capablanca in Memoriam 2010</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2011.html">Capablanca in Memoriam 2011</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2012.html">Capablanca in Memoriam 2012</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2013.html">Capablanca in Memoriam 2013</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2014.html">Capablanca in Memoriam 2014</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2015.html">Capablanca in Memoriam 2015</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2016.html">Capablanca in Memoriam 2016</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2017.html">Capablanca in Memoriam 2017</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2018.html">Capablanca in Memoriam 2018</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2019.html">Capablanca in Memoriam 2019</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2020.html">Capablanca in Memoriam 2020</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2021.html">Capablanca in Memoriam 2021</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2022.html">Capablanca in Memoriam 2022</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2023.html">Capablanca in Memoriam 2023</a></li>
        <li><a class="dropdown-item" href="./capablanca/capablanca-in-memoriam-2024.html">Capablanca in Memoriam 2024</a></li>
        

      </ul>
    </li>
    
    <!-- Dropdown - Elite -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Elite
      </a>
      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="./elite.html">Elite</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/14103320.html"><img src="img/minflags/UKR.png" alt="UKR"> <span class="backgroundWhite">(2646)</span> Ruslan Ponomariov</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/5084423.html"><img src="img/minflags/IND.png" alt="IND"> <span class="backgroundWhite">(2630)</span> Chopra Aryan</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3518736.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2604)</span> Carlos Daniel Albornoz Cabrera</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/1413864.html"><img src="img/minflags/DEN.png" alt="DEN"> <span class="backgroundWhite">(2598)</span> Mads Andersen</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4148843.html"><img src="img/minflags/NOR.png" alt="NOR"> <span class="backgroundWhite">(2598)</span> Evgeny Romanov</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3520773.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2567)</span> Luis Ernesto Quesada Perez</a></li>
      </ul>
    </li>
    
    <!-- Dropdown - Open -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Open
      </a>
      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="./open.html">Open</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3503313.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2515)</span> Omar Almeida Quintana</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3503054.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2504)</span> Renier Vazquez Igarza</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2255570.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(2502)</span> Jose Fernando Cuenca Jimenez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3516016.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2499)</span> Dylan Isidro Berdayes Ason</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3507424.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2498)</span> Ermes Espinosa Veloz</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3500799.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2490)</span> Kevel Oliva Castaneda</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3510697.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2480)</span> Elier Miranda Mesa</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3508455.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2475)</span> Luis Lazaro Aguero Jimenez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3517470.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2465)</span> Jorge Roberto Elias Reyes</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4128290.html"><img src="img/minflags/CAN.png" alt="CAN"> <span class="backgroundWhite">(2464)</span> Bator Sambuev</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3517179.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2462)</span> Michel Alejandro Diaz Perez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3504727.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2458)</span> Lelys Stanley Martinez Duany</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506703.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2439)</span> Rider Diaz Murgada</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4442024.html"><img src="img/minflags/COL.png" alt="COL"> <span class="backgroundWhite">(2439)</span> Esteban Alb Valderrama Quiceno</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/621650.html"><img src="img/minflags/FRA.png" alt="FRA"> <span class="backgroundWhite">(2431)</span> Gabriel Flom</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4401824.html"><img src="img/minflags/COL.png" alt="COL"> <span class="backgroundWhite">(2428)</span> Sergio E Barrientos</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4403304.html"><img src="img/minflags/COL.png" alt="COL"> <span class="backgroundWhite">(2407)</span> Sebastian Felipe Sanchez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3513157.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2396)</span> Cristian Vitier Vazquez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6504779.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(2391)</span> Emmanuel Jimenez Garcia</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3906353.html"><img src="img/minflags/COL.png" alt="COL"> <span class="backgroundWhite">(2387)</span> Jorge Samuel Bobadilla Viera</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3509540.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2387)</span> Manuel Dario Ochoa De La Rosa</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506770.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2383)</span> Luis Daniel Rodriguez Hernandez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506134.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2382)</span> Alejandro Yanes Canizares</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6501311.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(2361)</span> Sergio Duran Vega</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3524337.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2358)</span> Jerzy Jesus Perez Leiva</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3528758.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2357)</span> Daniel Hidalgo Diaz</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3524582.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2349)</span> Jorge De Jesus Perez Marimon</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4615000.html"><img src="img/minflags/GER.png" alt="GER"> <span class="backgroundWhite">(2340)</span> Gunter Spiess</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526151.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2338)</span> Jose Avelino Alvarez Calzadilla</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3504190.html"><img src="img/minflags/MEX.png" alt="MEX"> <span class="backgroundWhite">(2337)</span> Lisandro Fernandez Reyes</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506320.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2337)</span> Victor Rodriguez Garcia</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3503011.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2337)</span> Ariel Pulido Alvarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3511090.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2324)</span> Richard Alejandro Garcia Matos</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/7700768.html"><img src="img/minflags/TTO.png" alt="TTO"> <span class="backgroundWhite">(2319)</span> Joshua Johnson</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3518817.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2318)</span> Mario Enrique Dieguez Alvarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3503798.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2315)</span> Pedro Morales Romero</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506940.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2313)</span> Lisandra Teresa Ordaz Valdes</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506177.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2311)</span> Jony Wilson Leon Valdes</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/24537675.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(2311)</span> Miguel Ruiz Buendia</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530698.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2310)</span> Ronny Manuel Lafont Linares</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506649.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2307)</span> Jorge Marcos Gomez Sanchez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3527573.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2304)</span> Kebert Solares Orozco</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2125404.html"><img src="img/minflags/BRA.png" alt="BRA"> <span class="backgroundWhite">(2288)</span> Lucas Aguiar Cunha</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/5133483.html"><img src="img/minflags/MEX.png" alt="MEX"> <span class="backgroundWhite">(2285)</span> Miguel Ta Palma Villanueva</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531120.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2283)</span> Leduard Manuel Gonzalez Soler</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530744.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2274)</span> Raymond Daniel Azahares Serrano</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3507700.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2270)</span> Yerisbel Miranda Llanes</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3508072.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2264)</span> Yaniela Forgas Moreno</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3504697.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2256)</span> Jeorling Yahytin Batista Suarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3504158.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2253)</span> Felix Fuentes Dominguez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3524329.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2252)</span> Reyson Ricardo Rodriguez Basulto</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3524876.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2250)</span> Alain Otero Marino</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3529983.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2248)</span> Adrian Jesus Almaguel Mendez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3506100.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2246)</span> Reynold Rafael Fernandez Mayola</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3534464.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2215)</span> Ronniel Abraham Ramirez Cabreja</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3500861.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2211)</span> Omar Garcia Martinez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6507522.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(2205)</span> David Alejandro Cabezas Solano</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3802744.html"><img src="img/minflags/PER.png" alt="PER"> <span class="backgroundWhite">(2205)</span> Juan Antonio Villar Reymundo</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3528472.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2204)</span> Alian Alberto Borroto Fajardo</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/5101018.html"><img src="img/minflags/MEX.png" alt="MEX"> <span class="backgroundWhite">(2197)</span> Julian Estrada Nieto</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4613040.html"><img src="img/minflags/GER.png" alt="GER"> <span class="backgroundWhite">(2195)</span> Ralf Schnabel</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6500366.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(2192)</span> Mauricio Arias Santana</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3518779.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2188)</span> Alejandro Alegre Leyva</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3513092.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2175)</span> Nelson Mora Diaz</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526593.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2174)</span> Livan Guevara Fernandez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531759.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2174)</span> Lorenzo Alberto Perez Alvarado</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530060.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2173)</span> Edrwis Anthuan Espinosa Forti</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3520609.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2172)</span> Raul Leonardo Lavigne Lopez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3504794.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2169)</span> Oleiny Linares Napoles</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530108.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2157)</span> Hector Luis Fuentes De Feria</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526216.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2156)</span> Ineymig Hernandez Gil</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3525090.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2154)</span> Cristhian Portal Ramos</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3523489.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2146)</span> Leannet Mariah Bosch Valls</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526771.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2145)</span> Rafael Antonio Tanda Pretel</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3502023.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2131)</span> Manuel Charon Mustelier</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3512207.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2127)</span> Dennys Ordunez Echarte</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3517616.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2124)</span> Henry Alvarez Ruiz</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3524531.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2121)</span> Patricia M. Hernandez Machado</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531953.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2116)</span> Alex Herrera Pedroso</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3500292.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2108)</span> Pedro Rodriguez Rivera</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3521494.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2100)</span> Ariel Gallestey Calvo</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3527689.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2091)</span> Dario Rodriguez Gomez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526542.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2083)</span> Kendry Daniel Morales Mora</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530655.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2078)</span> Greter Caballero Ramos</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6516718.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(2076)</span> Jeigoth Pastor Carvajal</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3603687.html"><img src="img/minflags/ECU.png" alt="ECU"> <span class="backgroundWhite">(2071)</span> Carla Heredia Serrano</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3512649.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2058)</span> Alberto D. Interian Rodriguez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3507629.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2052)</span> Yoana Gonzalez Ochoa</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3513238.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2048)</span> Karen Gutierrez Espinosa</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/4651413.html"><img src="img/minflags/GER.png" alt="GER"> <span class="backgroundWhite">(2048)</span> Ingo Stark</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531279.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2046)</span> Osiel Alberto Alonso Orta</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3526038.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2043)</span> Andres Morales Cedeno</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3529045.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2039)</span> Lorena Beatriz Montejo Bello</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531341.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2022)</span> Diego Torres Ymas</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3511502.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2019)</span> Adrian De Jesus Molina Suarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3523853.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2004)</span> Edualis Delgado Alvarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3527280.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1992)</span> Aliett Valdes Boza</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3527344.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1992)</span> Jose Angel Rodriguez Hernandez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530337.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1987)</span> Isabela Luis Alvarez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6514065.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1972)</span> Sofia Mayorga Araya</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/54777224.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(1969)</span> Carlos Victor Maury Escalante</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3904989.html"><img src="img/minflags/VEN.png" alt="VEN"> <span class="backgroundWhite">(1968)</span> Miguel Andres Herize Godoy</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6502911.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1951)</span> Maria Elena Rodriguez Arrieta</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3523500.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1948)</span> Dexnisi Del Rosario Silva</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/32037759.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(1944)</span> Karim Javier Rodriguez Bittar</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3527182.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1941)</span> Rosangela Manso Lopez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/5199190.html"><img src="img/minflags/MEX.png" alt="MEX"> <span class="backgroundWhite">(1938)</span> Sebastian Silva Martinez Del Canizo</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2215055.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(1921)</span> Felipe Hurtado Oldridge</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3515940.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1917)</span> Jesus Dominguez Correa</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3530116.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1917)</span> Anjaly Daniela Galan Palacio</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3531333.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1895)</span> Alejandra Torres Ymas</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/8407100.html"><img src="img/minflags/HON.png" alt="HON"> <span class="backgroundWhite">(1892)</span> Valeria Viana</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3525058.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1877)</span> Massiel Venero Noda</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3529118.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(1856)</span> Sheila Suarez Castillo</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6504442.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1854)</span> Jennifer Acevedo Mendez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/22237488.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(1850)</span> Andreu Voltes Miret</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2603136.html"><img src="img/minflags/CAN.png" alt="CAN"> <span class="backgroundWhite">(1840)</span> Halldor Peter Palsson</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6543863.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1818)</span> Matias Haziel Lizano Quiros</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6504582.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1806)</span> Karina Bogantes Robleto</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6525490.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1798)</span> Victoria Canales Chinchilla</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2278588.html"><img src="img/minflags/ESP.png" alt="ESP"> <span class="backgroundWhite">(1788)</span> Jose Carlos Martin Rodriguez</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/1329340.html"><img src="img/minflags/SUI.png" alt="SUI"> <span class="backgroundWhite">(1726)</span> Hugo Werren</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6534961.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1674)</span> Valentina Campos Munoz</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/7708602.html"><img src="img/minflags/TTO.png" alt="TTO"> <span class="backgroundWhite">(1659)</span> Jerome Richardson</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3242196.html"><img src="img/minflags/AUS.png" alt="AUS"> <span class="backgroundWhite">(1625)</span> Matthew Chippendale</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/6523919.html"><img src="img/minflags/CRC.png" alt="CRC"> <span class="backgroundWhite">(1586)</span> Larissa Mayorga Araya</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/2035189.html"><img src="img/minflags/USA.png" alt="USA"> <span class="backgroundWhite">(0)</span> Ricardo Bigorra</a></li>
        <li><a class="dropdown-item" href="./capablanca-2024/players/3509265.html"><img src="img/minflags/COL.png" alt="COL"> <span class="backgroundWhite">(2527)</span> Roberto Garcia Pantoja</a></li>
      </ul>
    </li>
    
    <!-- Dropdown - Senior -->
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Senior
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="./senior.html">Senior</a></li>
          <!-- <li><hr class="dropdown-divider"></li> -->
          <!-- <li><a class="dropdown-item" href="./capablanca2024/players/14103320.html"><img src="img/minflags/UKR.png" alt="UKR"> <span class="backgroundWhite">(2646)</span> Ruslan Ponomariov</a></li> -->
        </ul>
    </li>

    <!-- Dropdown - Junior -->
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Junior
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="./junior.html">Junior</a></li>
          <!-- <li><hr class="dropdown-divider"></li> -->
          <!-- <li><a class="dropdown-item" href="./capablanca2024/players/3520773.html"><img src="img/minflags/CUB.png" alt="CUB"> <span class="backgroundWhite">(2567)</span> Luis Ernesto Quesada Perez</a></li> -->
        </ul>
    </li>

  </ul>
  <br>
  <!-- END - SUBNAV -->`;
let JaviRamosLabBadgeAntipixel = `<br>
<img src="./img/hr división logo Cuba.svg" alt="Logo de Cuba" class="hrLogoCuba">
<a href="/" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/myhomepage.gif" alt="Homepage"></a>
<a href="/about" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/info.png" alt="About"></a>
<a href="/contact-us" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/cont2.gif" alt="Contactar"></a>
<a href="/download" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/down2.gif" alt="Download"></a>
<!-- <img src="./icons/badges/lr.png" alt="register"> -->
<a href="" target="_blank" rel="noopener noreferrer" id="badgeAntipixelPermalink"><img src="./icons/badges/permalink.gif" alt="permalink"></a>
<a href="/sitemap.xml" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/xmlsitemap.gif" alt="xmlsitemap"></a>
<a href="/about-javier" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/admin.gif" alt="Admin"></a>
<!-- <a href="/faq" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/faq.gif" alt="FAQ"></a> -->
<a href="https://github.com/JaviRamosLab" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/blogcode.gif" alt="Código"></a><!-- link a github -->
<a href="/wikipedia" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/wikipedia_button_80x15.png" alt="Wikipedia"></a>
<a href="https://www.youtube.com/@JaviRamosLab" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/yt.gif" alt="YouTube"></a>
<a href="/stats" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/stats.gif" alt="Estadísticas"></a>
<!-- <a href="/download" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/download.png" alt="Descargas"></a> -->
<a href="/download" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/download_pdf.gif" alt="Descargas PDF"></a>
<a href="https://telegram.me/JaviRamosLab/" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/archives2.gif" alt="Archivo"></a><!-- link a telegram repo -->
<a href="/contact-us" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/contact.png" alt="Contactos"></a>
<a href="/assets/javiramoslab-contact.vcf" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/addresscard.gif" alt=""></a><!-- download link archivo card -->
<a href="mailto:co2mm.esperanto@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/email_copy1.gif" alt="email"></a>
<a href="sms://+5358439494;?&body=" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/smsme.gif" alt="sms"></a>
<!-- <img src="./icons/badges/atom.png" alt="atom"> -->
<!-- <img src="./icons/badges/rssfeed_copy1.gif" alt="rssfeed"> -->
<!-- <a href="https://www.facebook.com/JaviRamosLab/" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/comments.gif" alt="Comentarios en facebook"></a>link a facebook page -->
<a href="/sitemap.xml" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/sitemap2.gif" alt="sitemap"></a>
<a href="https://github.com/JaviRamosLab" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/readme_copy1.gif" alt="Readme.md (documentación tencnica)"></a><!-- link a github repo readme -->
<img src="./icons/badges/subscribe.gif" alt="subscribe">
<img src="./icons/badges/onebuck.gif" alt="Donar/Contribuir 1$/server">
<a href="https://paypal.me/LeonorNistal" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/paypalgreen.png" alt="paypal"></a>
<img src="./icons/badges/credit.gif" alt="credit card">
<br>
<img src="./icons/badges/geek.gif" alt="geek">
<a href="https://es.wikipedia.org/wiki/Geek" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/geek100.gif" alt="geek100"></a>
<a href="https://es.wikipedia.org/wiki/Esperanto" target="_blank" rel="noopener noreferrer"><img src="./icons/badges/button_esperanto.gif" alt="Esperanto"></a><!-- link a wikipedia -->
<img src="./icons/badges/cuba_copy1.gif" alt="cuba">
<img src="./icons/badges/buttongnugpl.png" alt="GPL">
<img src="./icons/badges/cclicensed.gif" alt="Creative Commons">`;
let JaviRamosLabFooter = `<!-- Footer - OpCaSu -->
<section class="OpCaSuFooter">

  <!-- Footer -->
  <footer class="mt-auto bg-primary text-white">
      <!-- Grid container -->
      <!-- <div class="container-lg p-4"> -->
      <div class="p-4">
          <!--Grid row-->
          <div class="row">
              <!--Grid column-->
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <!-- About Title -->
                  <h5 class="text-capitalize backgroundBlack">JaviRamosLab</h5>
                  <p>
                    <strong><em><span class="backgroundBlack">JaviRamosLab</span></em></strong> is a team/group of developers, designers, marketer, translators and chess lover based on Cuba.<span class="backgroundBlack">#JaviRamosLab</span><br>
                  </p>
                  <!-- AddToAny - button_facebook_like -->
                  <div class="a2a_kit">
                    <a class="a2a_button_facebook_like" data-action="recommend" data-href="https://javiramoslab.com/" data-layout="box_count" data-width="55"></a>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Links</h5>

                  <ul class="list-unstyled mb-0">
                      <li>
                          <a href="./services.html" class="text-white">Services</a>
                      </li>
                      <li>
                          <a href="./capablanca-2024/elite.html" class="text-white">Capablanca Group Elite</a>
                      </li>
                      <li>
                          <a href="./capablanca-2024/open.html" class="text-white">Capablanca Group Open</a>
                      </li>
                      <li>
                          <a href="./about.html" class="text-white">About</a>
                      </li>
                      <li>
                          <a href="./team.html" class="text-white">Team</a>
                      </li>
                  </ul>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Contact Us</h5>
                  <ul class="list-unstyled mb-0">
                    <li><i class="fa-solid fa-envelope-o mr-3"></i> <a href="mailto:co2mm.esperanto@gmail.com" class="text-white">co2mm.esperanto@gmail.com</a></li>
                    <li><a href="https://telegram.me/+5358439494" class="text-white" target="_blank" rel="noopener noreferrer">telegram.me/+5358439494</a></li>
                    <li><a href="tel:+5358439494" class="text-white">+5358439494</a></li>
                    <!-- <li><a href="https://facebook.com/JaviRamosLab" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fa-brands fa-facebook"></i> facebook</a></li> -->
                    <!-- <li><a href="https://youtube.com/JaviRamosLab" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fa-brands fa-youtube"></i> youtube</a></li> -->
                    <li>
                      <div class="a2a_kit a2a_kit_size_32 a2a_default_style a2a_follow">
                        <a class="a2a_button_facebook" href="https://www.facebook.com/JaviRamosLab"></a>
                        <a class="a2a_button_youtube" href="https://www.youtube.com/@JaviRamosLab"></a>
                        <a class="a2a_button_x" href="https://twitter.com/JaviRamosLab"></a>
                        <a class="a2a_button_instagram" href="https://www.instagram.com/JaviRamosLab"></a>
                        <a class="a2a_button_github" href="https://github.com/JaviRamosLab"></a>
                        <a class="a2a_button_google_maps" href="https://maps.app.goo.gl/rCcbMnafbzMsEtbH7"></a>
                    </div>
                    </li>
                  <p></p>
                  <p></p>
                </ul>
              </div>
              <!--Grid column-->
          </div>
          <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/JaviRamosLab">🔧JaviRamosLab v0.1 (beta)</a> © 2024 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://javiramoslab.com">Javier Ramos Nistal (@JaviRamosLab)</a> is licensed under <a href="https://github.com/JaviRamosLab/blob/master/LICENSE">GNU</a> and <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a> (from 🇨🇺 Cuba with "❤️, ⏰" and whithout "💰")</p>
      </div>
      <!-- Copyright -->
  </footer>
  <!-- Footer -->
</section>
<!-- footer end -->

<!-- Footer - OpCaSu -->
<!-- END - Footer - OpCaSu -->`;

  document.getElementById("JaviRamosLabBanner").innerHTML = JaviRamosLabBanner;
  document.getElementById("JaviRamosLabNav").innerHTML = JaviRamosLabNav;
  document.getElementById("JaviRamosLabBadgeAntipixel").innerHTML = JaviRamosLabBadgeAntipixel;
  document.getElementById("JaviRamosLabFooter").innerHTML = JaviRamosLabFooter;
}
addInfo();

>>>>>>> Stashed changes
// BTN - Scroll Back To Top
let mybuttonmyBtnToTop = document.getElementById("myBtnToTop");
window.onscroll = function() {scrollFunctionmyBtnToTop()};
function scrollFunctionmyBtnToTop() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybuttonmyBtnToTop.style.display = "block";
  } else {
    mybuttonmyBtnToTop.style.display = "none";
  }
}
function topFunctionmyBtnToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// antipixel permalink - CurrentURL/
function badgeAntipixelPermalink(){
let badgeAntipixelPermalinkURL = window.location.href;
document.getElementById("badgeAntipixelPermalink").setAttribute("src", badgeAntipixelPermalinkURL);
}
badgeAntipixelPermalink();
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
