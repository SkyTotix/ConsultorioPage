/**
 * ===================================
 * JAVASCRIPT PRINCIPAL - CONSULTORIO MÉDICO
 * ===================================
 * Funcionalidades interactivas para el consultorio médico
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Consultorio médico cargado correctamente');
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
    
    // Inicializar todas las funcionalidades existentes
    initNavigation();
    initScrollAnimations();
    initCitaForm();
    initModal();
    initSmoothScrolling();
    initContactInfo();
    initVolverArriba();
    
    // Inicializar nuevas funcionalidades
    initNewFeatures();
});

/**
 * Inicializar navegación activa
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Función para actualizar navegación activa
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Escuchar scroll para actualizar navegación
    window.addEventListener('scroll', updateActiveNav);
    
    // Actualizar al cargar la página
    updateActiveNav();
}

/**
 * Inicializar animaciones de scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Agregar clase fade-in a elementos que queremos animar
    const animateElements = document.querySelectorAll('.service-card, .hero-section h1, .hero-section p, .doctor-image');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/**
 * Inicializar botón volver arriba
 */
function initVolverArriba() {
    const btnVolverArriba = document.getElementById('btnVolverArriba');
    
    if (btnVolverArriba) {
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                btnVolverArriba.style.display = 'block';
            } else {
                btnVolverArriba.style.display = 'none';
            }
        });
        
        // Funcionalidad del botón
        btnVolverArriba.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Inicializar formulario de citas médicas
 */
function initCitaForm() {
    const citaForm = document.getElementById('citaForm');
    
    if (citaForm) {
        citaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value;
            const servicio = document.getElementById('servicio').value;
            const sintomas = document.getElementById('sintomas').value;
            
            // Validación básica
            if (!nombre || !telefono || !email || !fecha || !hora || !servicio) {
                mostrarAlerta('Por favor, completa todos los campos obligatorios.', 'warning');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                mostrarAlerta('Por favor, ingresa un email válido.', 'warning');
                return;
            }
            
            // Validación de teléfono
            const telefonoRegex = /^[\d\s\-\+\(\)]+$/;
            if (!telefonoRegex.test(telefono)) {
                mostrarAlerta('Por favor, ingresa un número de teléfono válido.', 'warning');
                return;
            }
            
            // Validación de fecha (no puede ser anterior a hoy)
            const fechaSeleccionada = new Date(fecha);
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            
            if (fechaSeleccionada < hoy) {
                mostrarAlerta('La fecha de la cita no puede ser anterior a hoy.', 'warning');
                return;
            }
            
            // Mostrar modal de confirmación
            mostrarConfirmacionCita({
                nombre,
                telefono,
                email,
                fecha,
                hora,
                servicio,
                sintomas
            });
        });
    }
}

/**
 * Inicializar modal de confirmación
 */
function initModal() {
    const citaModal = document.getElementById('citaModal');
    
    if (citaModal) {
        citaModal.addEventListener('shown.bs.modal', function() {
            console.log('Modal de confirmación de cita abierto');
        });
    }
}

/**
 * Inicializar scroll suave
 */
function initSmoothScrolling() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajustar para navbar fijo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Inicializar información de contacto
 */
function initContactInfo() {
    // Agregar funcionalidad a los enlaces de teléfono
    const telefonos = document.querySelectorAll('a[href^="tel:"]');
    telefonos.forEach(telefono => {
        telefono.addEventListener('click', function(e) {
            console.log('Llamando a:', this.href);
        });
    });
}

/**
 * Función para agendar cita (desde botones)
 */
function agendarCita() {
    scrollToSection('citas');
}

/**
 * Función para hacer scroll a una sección específica
 */
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Función para mostrar confirmación de cita
 */
function mostrarConfirmacionCita(datos) {
    const modal = document.getElementById('citaModal');
    const detallesDiv = document.getElementById('citaDetalles');
    
    if (modal && detallesDiv) {
        // Formatear fecha
        const fechaFormateada = new Date(datos.fecha).toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Obtener nombre del servicio
        const servicios = {
            'consulta-general': 'Consulta General',
            'cardiologia': 'Cardiología',
            'pediatria': 'Pediatría',
            'laboratorio': 'Laboratorio Clínico',
            'radiologia': 'Radiología',
            'urgencias': 'Urgencias'
        };
        
        const nombreServicio = servicios[datos.servicio] || datos.servicio;
        
        detallesDiv.innerHTML = `
            <div class="alert alert-info">
                <h6>Detalles de la cita:</h6>
                <p><strong>Paciente:</strong> ${datos.nombre}</p>
                <p><strong>Teléfono:</strong> ${datos.telefono}</p>
                <p><strong>Email:</strong> ${datos.email}</p>
                <p><strong>Fecha:</strong> ${fechaFormateada}</p>
                <p><strong>Hora:</strong> ${datos.hora}</p>
                <p><strong>Servicio:</strong> ${nombreServicio}</p>
                ${datos.sintomas ? `<p><strong>Síntomas:</strong> ${datos.sintomas}</p>` : ''}
            </div>
        `;
        
        // Guardar datos en el modal para confirmación
        modal.dataset.citaData = JSON.stringify(datos);
        
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    }
}

/**
 * Función para confirmar cita
 */
function confirmarCita() {
    const modal = document.getElementById('citaModal');
    const datosCita = modal.dataset.citaData;
    
    if (datosCita) {
        const datos = JSON.parse(datosCita);
        
        // Simular envío de cita
        mostrarAlerta('Procesando tu cita médica...', 'info');
        
        setTimeout(() => {
            mostrarAlerta('¡Cita agendada exitosamente! Te enviaremos una confirmación por email y SMS.', 'success');
            
            // Limpiar formulario
            const citaForm = document.getElementById('citaForm');
            if (citaForm) {
                citaForm.reset();
            }
            
            // Cerrar modal
            const bootstrapModal = bootstrap.Modal.getInstance(modal);
            bootstrapModal.hide();
            
            // Enviar datos a servidor (aquí iría la lógica real)
            enviarCitaAlServidor(datos);
            
        }, 2000);
    }
}

/**
 * Función para enviar cita al servidor
 */
function enviarCitaAlServidor(datos) {
    // Aquí iría la lógica real para enviar los datos al servidor
    console.log('Enviando cita al servidor:', datos);
    
    // Simular envío
    setTimeout(() => {
        console.log('Cita enviada exitosamente al servidor');
    }, 1000);
}

/**
 * Función para mostrar alertas personalizadas
 */
function mostrarAlerta(mensaje, tipo = 'info') {
    // Crear elemento de alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px; max-width: 400px;';
    
    alertDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${getIconForAlert(tipo)} me-2"></i>
            <div>
                <strong>${getTitleForAlert(tipo)}</strong><br>
                ${mensaje}
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Agregar al body
    document.body.appendChild(alertDiv);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

/**
 * Función para obtener icono según tipo de alerta
 */
function getIconForAlert(tipo) {
    const iconos = {
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'danger': 'times-circle',
        'info': 'info-circle'
    };
    return iconos[tipo] || 'info-circle';
}

/**
 * Función para obtener título según tipo de alerta
 */
function getTitleForAlert(tipo) {
    const titulos = {
        'success': '¡Éxito!',
        'warning': 'Advertencia',
        'danger': 'Error',
        'info': 'Información'
    };
    return titulos[tipo] || 'Información';
}

/**
 * Función para validar formularios
 */
function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll('[required]');
    let esValido = true;
    
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add('is-invalid');
            esValido = false;
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    });
    
    return esValido;
}

/**
 * Función para manejar errores de red
 */
function manejarErrorRed(error) {
    console.error('Error de red:', error);
    mostrarAlerta('Ha ocurrido un error de conexión. Por favor, intenta nuevamente.', 'danger');
}

/**
 * Función para mostrar/ocultar loader
 */
function mostrarLoader(mostrar = true) {
    let loader = document.querySelector('.loader-container');
    
    if (!loader && mostrar) {
        loader = document.createElement('div');
        loader.className = 'loader-container position-fixed w-100 h-100 d-flex justify-content-center align-items-center';
        loader.style.cssText = 'top: 0; left: 0; background: rgba(0,0,0,0.5); z-index: 9999;';
        loader.innerHTML = '<div class="loader"></div>';
        document.body.appendChild(loader);
    } else if (loader && !mostrar) {
        loader.remove();
    }
}

/**
 * Función para animar contadores
 */
function animarContador(elemento, valorFinal, duracion = 2000) {
    let valorActual = 0;
    const incremento = valorFinal / (duracion / 16);
    
    const timer = setInterval(() => {
        valorActual += incremento;
        
        if (valorActual >= valorFinal) {
            elemento.textContent = valorFinal;
            clearInterval(timer);
        } else {
            elemento.textContent = Math.floor(valorActual);
        }
    }, 16);
}

/**
 * Función para detectar si el dispositivo es móvil
 */
function esDispositivoMovil() {
    return window.innerWidth <= 768;
}

/**
 * Función para optimizar imágenes (lazy loading)
 */
function initLazyLoading() {
    const imagenes = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    imagenes.forEach(img => imageObserver.observe(img));
}

/**
 * Función para llamar al consultorio
 */
function llamarConsultorio() {
    window.location.href = 'tel:+525512345678';
}

/**
 * Función para enviar WhatsApp
 */
function enviarWhatsApp() {
    const mensaje = encodeURIComponent('Hola, me gustaría agendar una cita médica.');
    window.open(`https://wa.me/525512345678?text=${mensaje}`, '_blank');
}

/**
 * ===================================
 * NUEVAS FUNCIONALIDADES - PARALLAX, CONTADORES, TESTIMONIOS, ETC.
 * ===================================
 */



/**
 * Inicializar contadores animados
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter, target);
                }
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animar contador
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 20);
}

/**
 * Inicializar carrusel de testimonios con Swiper
 */
function initTestimonialsSwiper() {
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
}





/**
 * Inicializar botones flotantes
 */
function initFloatingButtons() {
    const floatingButtons = document.querySelectorAll('.floating-btn');
    
    floatingButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efecto de ripple
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Mejorar formulario con validación en tiempo real
 */
function initEnhancedForm() {
    const form = document.getElementById('citaForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validación en tiempo real
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });
    
    // Validación al enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            mostrarAlerta('Formulario enviado correctamente', 'success');
            form.reset();
        }
    });
}

/**
 * Validar campo individual
 */
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remover clases previas
    field.classList.remove('is-valid', 'is-invalid');
    
    // Validaciones específicas
    switch (field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
            break;
        case 'tel':
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            isValid = phoneRegex.test(value);
            break;
        default:
            isValid = value.length > 0;
    }
    
    // Aplicar clases de validación
    if (isValid) {
        field.classList.add('is-valid');
    } else {
        field.classList.add('is-invalid');
    }
    
    return isValid;
}

/**
 * Inicializar todas las nuevas funcionalidades
 */
function initNewFeatures() {
    // Inicializar contadores
    initCounters();
    
    // Inicializar carrusel de testimonios
    initTestimonialsSwiper();
    
    // Inicializar botones flotantes
    initFloatingButtons();
    
    // Mejorar formulario
    initEnhancedForm();
}



// Exportar funciones para uso global
window.agendarCita = agendarCita;
window.scrollToSection = scrollToSection;
window.mostrarAlerta = mostrarAlerta;
window.confirmarCita = confirmarCita;
window.llamarConsultorio = llamarConsultorio;
window.enviarWhatsApp = enviarWhatsApp; 