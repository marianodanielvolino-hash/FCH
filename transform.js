// Script de transformación - Aplica el plan de actualización al index.html
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const backupPath = path.join(__dirname, 'index.backup.html');

// Backup
fs.copyFileSync(filePath, backupPath);
console.log('Backup creado: index.backup.html');

let html = fs.readFileSync(filePath, 'utf-8');

// ═══════════════════════════════════════
// 1. NAVBAR LINKS
// ═══════════════════════════════════════
html = html.replace(
    /<ul class="navbar-links">[\s\S]*?<\/ul>/,
    `<ul class="navbar-links">
                <li><a href="#proposito">Misión</a></li>
                <li><a href="#conversacion">Nuestra Mirada</a></li>
                <li><a href="#experiencias">Verticales</a></li>
                <li><a href="#el-salto">El Salto</a></li>
                <li><a href="#alianzas">Alianzas</a></li>
            </ul>`
);
console.log('✓ Navbar actualizado');

// ═══════════════════════════════════════
// 2. MOBILE MENU LINKS
// ═══════════════════════════════════════
html = html.replace(
    /<a href="#proposito" onclick="closeMobileMenu\(\)">Propósito<\/a>[\s\S]*?<a href="#somos" onclick="closeMobileMenu\(\)">Quiénes Somos<\/a>/,
    `<a href="#proposito" onclick="closeMobileMenu()">Misión</a>
        <a href="#conversacion" onclick="closeMobileMenu()">Nuestra Mirada</a>
        <a href="#experiencias" onclick="closeMobileMenu()">Verticales</a>
        <a href="#el-salto" onclick="closeMobileMenu()">El Salto</a>
        <a href="#alianzas" onclick="closeMobileMenu()">Alianzas</a>`
);
console.log('✓ Mobile menu actualizado');

// ═══════════════════════════════════════
// 3. HERO
// ═══════════════════════════════════════
html = html.replace(
    /<div class="hero-content reveal">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*\n/,
    `<div class="hero-content reveal">
            <h1>Volver a elegir cómo querés vivir</h1>
            <p>Hay momentos en los que algo interno te dice que ya no alcanza con seguir funcionando.
                Cumplís. Respondés. Avanzás. Pero en algún punto aparece una pregunta silenciosa: <strong>¿Esto es todo?</strong></p>
            <p style="margin-top: 1rem; font-size: 1.1rem; opacity: 0.9;">Consciencia Humana le habla a quienes están listos para evolucionar.</p>
            <div class="button-group" style="margin-top: 1rem;">
                <a href="#cta-final" class="btn-hero">Quiero comenzar mi proceso</a>
                <a href="#conversacion" class="btn-outline-white" style="padding: 1rem 2rem; border-radius: 50px;">
                    Conocer nuestra mirada
                </a>
            </div>
        </div>
    </section>

`
);
console.log('✓ Hero actualizado');

// ═══════════════════════════════════════
// 4. REPLACE "CÓMO TRABAJAMOS" → MISIÓN + LA CONVERSACIÓN
// ═══════════════════════════════════════
html = html.replace(
    /<!-- ═+\s+SECCIÓN 2: LA METODOLOGÍA[\s\S]*?<section class="section section-white" id="como-trabajamos">[\s\S]*?<\/section>/,
    `<!-- ═══════════════════════════════════════
         SECCIÓN: NUESTRA MISIÓN
         ═══════════════════════════════════════ -->
    <section class="section section-white" id="proposito">
        <div class="section-inner">
            <div class="triada-intro reveal" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <span class="section-tag">Nuestra Misión</span>
                <h2 class="section-title">Contribuir a una sociedad donde las personas se sientan orgullosas de pertenecer</h2>
                <p class="section-subtitle" style="margin: 0 auto;">Una sociedad donde el crecimiento no esté desconectado del bienestar.</p>
                <p style="margin-top: 2rem; font-size: 1.05rem; color: var(--texto-light); font-style: italic;">
                    Creemos que cada desafío es una oportunidad de expansión.<br>
                    Y que el desarrollo del potencial humano es el recurso más poderoso que existe.
                </p>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════
         SECCIÓN: LA CONVERSACIÓN QUE CAMBIA TODO
         ═══════════════════════════════════════ -->
    <section class="section section-light" id="conversacion">
        <div class="section-inner">
            <div class="triada-intro reveal">
                <span class="section-tag">Nuestra Mirada</span>
                <h2 class="section-title">La conversación que cambia todo</h2>
                <p class="section-subtitle">Proponemos reinstalar una conversación más poderosa: la que nace cuando empezás a observarte sin juicio y a responder desde tu mejor versión posible.</p>
            </div>
            <div class="triada-grid stagger" style="margin-top: 3rem;">
                <div class="triada-card reveal" style="--i:0; border-top: 4px solid var(--violeta-soft);">
                    <div class="triada-icon" style="background:rgba(107, 78, 191, 0.1); color:var(--violeta-soft);">
                        <i class="ph-light ph-arrows-left-right"></i>
                    </div>
                    <h3>Reaccionar vs. Elegir</h3>
                    <p>Existe una diferencia entre reaccionar y elegir. Entre repetir patrones y crear nuevas posibilidades.</p>
                </div>
                <div class="triada-card reveal" style="--i:1; border-top: 4px solid var(--rosa);">
                    <div class="triada-icon" style="background:rgba(232, 67, 147, 0.1); color:var(--rosa);">
                        <i class="ph-light ph-chat-centered-text"></i>
                    </div>
                    <h3>Conversación interna</h3>
                    <p>No es una conversación intelectual. Es una conversación interna que redefine identidad.</p>
                </div>
                <div class="triada-card reveal" style="--i:2; border-top: 4px solid var(--verde);">
                    <div class="triada-icon" style="background:rgba(0, 184, 148, 0.1); color:var(--verde);">
                        <i class="ph-light ph-heart"></i>
                    </div>
                    <h3>La conversación del corazón</h3>
                    <p>Cuando cambia la forma en que te hablás, cambia la forma en que actuás. Y cuando cambia tu acción, cambia tu realidad.</p>
                </div>
            </div>
        </div>
    </section>`
);
console.log('✓ Misión + La conversación insertados');

// ═══════════════════════════════════════
// 5. REPLACE EL SALTO + EXPERIENCIAS + DEL SENTIR AL HACER
//    → GENERAMOS + PROTAGONISTA + DÓNDE + VERTICALES + EL SALTO (sin foto)
// ═══════════════════════════════════════
html = html.replace(
    /<!-- ═+\s+SECCIÓN 3: PLATAFORMA DE TRANSFORMACIÓN[\s\S]*?<!-- ═+\s+SECCIÓN: ENTENDIENDO LA TRANSFORMACIÓN[\s\S]*?<\/section>/,
    `<!-- ═══════════════════════════════════════
         SECCIÓN: CÓMO GENERAMOS TRANSFORMACIÓN REAL
         ═══════════════════════════════════════ -->
    <section class="section section-white" id="transformacion">
        <div class="section-inner">
            <div class="platform-grid" style="grid-template-columns: 1fr 1fr; align-items: start;">
                <div class="platform-img reveal">
                    <img src="img/transformacion-img.png" alt="Transformación"
                        style="border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                </div>
                <div class="reveal">
                    <h2 class="section-title">Cómo generamos transformación real</h2>
                    <p style="font-size: 1.1rem; color: var(--texto-light); margin-bottom: 2rem;">Las personas ya tienen recursos internos. Solo necesitan activarlos con claridad y método.</p>
                    <p style="margin-bottom: 1.5rem; color: var(--texto-light);">Creamos espacios donde:</p>
                    <ul class="audience-list">
                        <li><i class="ph-fill ph-check-circle"></i> <span>Identificás tus fortalezas reales.</span></li>
                        <li><i class="ph-fill ph-check-circle"></i> <span>Reconocés patrones limitantes sin quedarte atrapado en ellos.</span></li>
                        <li><i class="ph-fill ph-check-circle"></i> <span>Redefinís tu narrativa personal.</span></li>
                        <li><i class="ph-fill ph-check-circle"></i> <span>Elegís respuestas más efectivas frente al contexto.</span></li>
                    </ul>
                    <p style="margin-top: 2rem; font-style: italic;">Porque entender no alcanza. La transformación ocurre cuando incorporás nuevas formas de pensar, sentir y actuar.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════
         SECCIÓN: EL ARQUETIPO DEL PROTAGONISTA
         ═══════════════════════════════════════ -->
    <section class="section section-light" id="protagonista">
        <div class="section-inner">
            <div class="triada-intro reveal" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <span class="section-tag">Posicionamiento Interior</span>
                <h2 class="section-title">El arquetipo del protagonista</h2>
                <p class="section-subtitle" style="margin: 0 auto;">En un entorno cambiante, el protagonista no controla todo. Pero sí elige su respuesta. Cuando asumís ese lugar, aumenta tu claridad, tu energía y tu capacidad de influencia.</p>
                <p style="margin-top: 1.5rem; color: var(--texto-light);">No se trata de negar el caos externo. Se trata de fortalecer tu equilibrio interior.</p>
            </div>
            <div class="metrics-grid stagger" style="margin-top: 3rem;">
                <div class="metric-item reveal" style="--i:0">
                    <div class="triada-icon rosa-bg" style="margin: 0 auto 1rem;"><i class="ph-fill ph-heart"></i></div>
                    <div class="metric-label" style="color: var(--texto);">Tu bienestar</div>
                </div>
                <div class="metric-item reveal" style="--i:1">
                    <div class="triada-icon amarillo-bg" style="margin: 0 auto 1rem;"><i class="ph-fill ph-users"></i></div>
                    <div class="metric-label" style="color: var(--texto);">Tus vínculos</div>
                </div>
                <div class="metric-item reveal" style="--i:2">
                    <div class="triada-icon verde-bg" style="margin: 0 auto 1rem;"><i class="ph-fill ph-rocket-launch"></i></div>
                    <div class="metric-label" style="color: var(--texto);">Tu desempeño</div>
                </div>
                <div class="metric-item reveal" style="--i:3">
                    <div class="triada-icon" style="background:rgba(107,78,191,0.1); color:var(--violeta-soft); margin: 0 auto 1rem;"><i class="ph-fill ph-chart-line-up"></i></div>
                    <div class="metric-label" style="color: var(--texto);">Tus resultados</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════
         SECCIÓN: DÓNDE ACTUAMOS
         ═══════════════════════════════════════ -->
    <section class="section section-dark" id="donde-actuamos">
        <div class="section-inner">
            <div class="triada-intro reveal" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <span class="section-tag section-tag-light">Alcance</span>
                <h2 class="section-title" style="color: var(--blanco);">Dónde actuamos</h2>
                <p class="section-subtitle-light" style="margin: 0 auto;">Trabajamos en aquellos espacios donde existe conciencia de que algo necesita cambiar. Donde hay voluntad de evolucionar. Donde las personas están listas para asumir responsabilidad sobre su impacto.</p>
                <p style="margin-top: 2rem; color: rgba(255,255,255,0.8); font-style: italic;">No imponemos transformación. La facilitamos cuando hay apertura y compromiso.</p>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════
         SECCIÓN: VERTICALES DE ACCIÓN
         ═══════════════════════════════════════ -->
    <section class="section section-white" id="experiencias">
        <div class="section-inner">
            <div class="triada-intro reveal">
                <span class="section-tag">Nuestras verticales de acción</span>
            </div>
            <div class="triada-grid stagger">
                <div class="triada-card reveal" style="--i:0;">
                    <div class="triada-icon rosa-bg"><i class="ph-fill ph-buildings"></i></div>
                    <h3>Innovación en el Servicio Público</h3>
                    <p>Acompañamos a quienes sostienen estructuras públicas para reconectar con sentido y propósito en su tarea diaria. Cuando quienes ayudan se sienten sostenidos, el impacto se multiplica.</p>
                </div>
                <div class="triada-card reveal" style="--i:1;">
                    <div class="triada-icon amarillo-bg"><i class="ph-fill ph-briefcase"></i></div>
                    <h3>Desempeño con Propósito</h3>
                    <p>Los resultados organizacionales son el reflejo del estado interno de sus líderes y equipos. Fortalecemos: autoconfianza, comunicación consciente, claridad estratégica y responsabilidad compartida.</p>
                </div>
                <div class="triada-card reveal" style="--i:2;">
                    <div class="triada-icon verde-bg"><i class="ph-fill ph-sparkle"></i></div>
                    <h3>Experiencias abiertas</h3>
                    <p>Diseñamos procesos grupales que funcionan como catalizadores de cambio. Espacios donde podés ampliar tu perspectiva, ordenar decisiones importantes y activar nuevas posibilidades.</p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 3rem;">
                <a href="#cta-final" class="btn-rosa">Quiero saber más</a>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════
         SECCIÓN: EL SALTO DE TU VIDA (sin foto)
         ═══════════════════════════════════════ -->
    <section id="el-salto">
        <div class="el-salto-hero section-inner" style="align-items: center; justify-content: center; text-align: center; flex-direction: column;">
            <div class="el-salto-hero-content reveal" style="max-width: 800px; text-align: center;">
                <span class="section-tag" style="margin: 0 auto; margin-bottom: 1rem;">PLATAFORMA DE TRANSFORMACIÓN EN MOVIMIENTO</span>
                <h2 style="font-size: clamp(2.5rem, 6vw, 4rem); color: var(--violeta-deep); margin-bottom: 1rem;">El Salto de Tu Vida</h2>
                <p style="font-size: 1.25rem; color: var(--texto-light); margin: 0 auto 2.5rem; line-height: 1.4;">Un proceso presencial en Palermo para pasar de la claridad a la acción, con estructura, comunidad y seguimiento real.</p>
                <div class="button-group" style="justify-content: center;">
                    <a href="el-salto.html" class="btn-hero" style="padding: 1.2rem 3rem;">Conocer el programa completo</a>
                </div>
            </div>
        </div>
    </section>`
);
console.log('✓ Secciones intermedias reemplazadas (Generamos + Protagonista + Dónde + Verticales + El Salto)');

// ═══════════════════════════════════════
// 6. FOOTER CTA
// ═══════════════════════════════════════
html = html.replace(
    /<h2>Si sentís que es momento de dar un paso consciente<\/h2>/,
    `<h2>Si sentís que es momento de evolucionar</h2>`
);
html = html.replace(
    /<p>Cada proceso comienza con una conversación abierta\. Estamos aquí para escucharte y diseñar el camino\s*que necesitás\.<\/p>/,
    `<p>La pregunta no es si podés cambiar. La pregunta es cuándo decidís hacerlo.</p>`
);
html = html.replace(
    />Iniciar\s*conversación</,
    `>Quiero comenzar mi proceso<`
);
console.log('✓ Footer CTA actualizado');

// ═══════════════════════════════════════
// WRITE RESULT
// ═══════════════════════════════════════
fs.writeFileSync(filePath, html, 'utf-8');
console.log('\n✅ Transformación completada. index.html actualizado.');
console.log('📁 Backup disponible en: index.backup.html');
