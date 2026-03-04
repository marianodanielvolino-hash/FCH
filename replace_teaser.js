const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

const teaser = `    <section id="el-salto">
        <div class="el-salto-hero section-inner" style="align-items: center; justify-content: center; text-align: center; flex-direction: column;">
            <div class="el-salto-hero-content reveal" style="max-width: 800px; text-align: center;">
                <span class="section-tag" style="margin: 0 auto; margin-bottom: 1rem;">PLATAFORMA DE TRANSFORMACIÓN EN MOVIMIENTO</span>
                <h2 style="font-size: clamp(2.5rem, 6vw, 4rem); color: var(--violeta-deep); margin-bottom: 1rem;">El Salto de Tu Vida</h2>
                <p style="font-size: 1.25rem; color: var(--texto-light); margin: 0 auto 2.5rem; line-height: 1.4;">Un proceso presencial en Palermo para pasar de la claridad a la acción, con estructura, comunidad y seguimiento real.</p>
                <div class="button-group" style="justify-content: center;">
                    <a href="el-salto.html" class="btn-hero" style="padding: 1.2rem 3rem;">Conocer el programa completo</a>
                </div>
            </div>
            <div class="el-salto-hero-img reveal" style="--i:1; width: 100%; max-width: 900px; margin-top: 3rem;">
                <img src="img/elsalto-hero.png" alt="Espacio de transformación en Palermo" style="border-radius:20px; box-shadow: 0 10px 40px rgba(58,16,120,0.1);">
            </div>
        </div>
    </section>`;

lines.splice(1430, 489, teaser);
fs.writeFileSync('index.html', lines.join('\n'));
console.log('Replaced block successfully.');
