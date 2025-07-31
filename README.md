# Consultorio Médico Dr. García

Una landing page moderna para un consultorio médico desarrollada con Bootstrap 5 y las mejores prácticas de desarrollo web.

## 🚀 Características

- **Diseño Médico Profesional**: Interfaz limpia y confiable para pacientes
- **Sistema de Citas**: Formulario completo para agendar citas médicas
- **Servicios Médicos**: Información detallada de todos los servicios disponibles
- **Perfil del Doctor**: Sección dedicada con credenciales y experiencia
- **Información de Contacto**: Ubicación, teléfonos y horarios de atención
- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Optimización de Rendimiento**: Carga rápida y eficiente

## 📁 Estructura del Proyecto

```
ejemplo/
├── index.html              # Página principal del consultorio
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados médicos
│   ├── js/
│   │   └── main.js         # JavaScript para funcionalidades médicas
│   └── images/             # Directorio para imágenes médicas
├── .cursor/
│   └── rules/              # Reglas de desarrollo
│       ├── bootstrap-development.mdc
│       └── spanish-communication.mdc
└── README.md               # Documentación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos personalizados con tema médico
- **Bootstrap 5**: Framework CSS para diseño responsivo
- **JavaScript ES6+**: Funcionalidades interactivas para citas
- **Font Awesome**: Iconografía médica profesional

## 🏥 Secciones Principales

### 1. Barra de Navegación
- Logo del consultorio con icono médico
- Menú responsive con enlaces a secciones
- Botón destacado para agendar citas
- Navegación fija en la parte superior

### 2. Sección Hero (Inicio)
- Mensaje principal sobre cuidado de la salud
- Estadísticas del consultorio (años de experiencia, pacientes)
- Botones de llamada a la acción
- Icono médico animado

### 3. Servicios Médicos
- **Consulta General**: Examen físico completo
- **Cardiología**: Especialistas en corazón
- **Pediatría**: Cuidado infantil especializado
- **Laboratorio Clínico**: Análisis precisos
- **Radiología**: Estudios de imagenología
- **Urgencias**: Atención 24/7

### 4. Perfil del Doctor
- Información detallada del Dr. Carlos García
- Credenciales y certificaciones
- Años de experiencia y pacientes atendidos
- Especialidades médicas

### 5. Sistema de Citas
- Formulario completo para agendar citas
- Selección de fecha y hora
- Elección de tipo de consulta
- Descripción de síntomas
- Validación en tiempo real

### 6. Información de Contacto
- **Ubicación**: Dirección del consultorio
- **Teléfonos**: Números de contacto y urgencias
- **Horarios**: Días y horarios de atención

## 🚀 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en tu navegador
3. **Explorar** las diferentes secciones médicas
4. **Probar** el sistema de citas
5. **Verificar** la información de contacto

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: Hasta 767px

## 🎯 Funcionalidades JavaScript

### Sistema de Citas
```javascript
// Formulario completo para agendar citas médicas
initCitaForm();
```

### Validación de Datos
```javascript
// Validación de email, teléfono y fecha
validarFormulario(formulario);
```

### Confirmación de Citas
```javascript
// Modal de confirmación con detalles de la cita
mostrarConfirmacionCita(datos);
```

### Alertas Médicas
```javascript
// Alertas personalizadas para el consultorio
mostrarAlerta('Cita agendada exitosamente', 'success');
```

## 🎨 Tema Médico

### Colores del Tema
- **Azul Médico**: #2c5aa0 (color principal)
- **Verde Médico**: #28a745 (éxito/confirmación)
- **Rojo Médico**: #dc3545 (urgencias/errores)
- **Azul Claro**: #e8f4fd (fondos suaves)

### Iconografía Médica
- **Stethoscope**: Consulta general
- **Heartbeat**: Cardiología
- **Baby**: Pediatría
- **Flask**: Laboratorio
- **X-ray**: Radiología
- **Ambulance**: Urgencias

## 📋 Servicios Médicos Disponibles

### Consulta General
- Examen físico completo
- Diagnóstico preciso
- Tratamiento personalizado

### Cardiología
- Electrocardiograma
- Monitoreo cardíaco
- Prevención cardiovascular

### Pediatría
- Control de crecimiento
- Vacunación
- Atención infantil

### Laboratorio Clínico
- Análisis de sangre
- Pruebas especializadas
- Resultados rápidos

### Radiología
- Rayos X
- Ultrasonido
- Resonancia magnética

### Urgencias
- Atención 24/7
- Equipo de emergencia
- Respuesta inmediata

## 🔧 Configuración del Entorno

### Requisitos
- Navegador web moderno
- Servidor web local (opcional, para desarrollo)

### Desarrollo Local
1. Instalar un servidor local (Live Server, XAMPP, etc.)
2. Abrir el proyecto en el servidor
3. Realizar cambios en los archivos
4. Ver cambios en tiempo real

## 📈 Optimización

### Rendimiento
- CDN para Bootstrap y Font Awesome
- CSS y JS optimizados
- Imágenes comprimidas
- Lazy loading para imágenes

### SEO Médico
- Meta tags específicos para consultorio
- Estructura HTML semántica
- Títulos descriptivos médicos
- Palabras clave relevantes

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Los estilos no se cargan**
   - Verificar conexión a internet (CDN)
   - Revisar rutas de archivos CSS

2. **Formulario de citas no funciona**
   - Verificar validación de campos
   - Revisar función de envío
   - Comprobar consola del navegador

3. **JavaScript no funciona**
   - Verificar consola del navegador
   - Asegurar que Bootstrap JS esté cargado

## 🤝 Personalización

### Cambiar Información del Consultorio
1. **Editar** `index.html` para cambiar datos del doctor
2. **Modificar** servicios en la sección correspondiente
3. **Actualizar** información de contacto
4. **Cambiar** colores en `assets/css/styles.css`

### Agregar Nuevos Servicios
1. **Duplicar** una tarjeta de servicio existente
2. **Cambiar** icono, título y descripción
3. **Actualizar** lista de servicios en el formulario
4. **Agregar** validación si es necesario

## 📞 Información de Contacto

- **Dirección**: Av. Principal #123, Col. Centro
- **Teléfono**: (55) 1234-5678
- **Urgencias**: (55) 1234-5679
- **Horarios**: Lunes a Viernes 8:00 AM - 8:00 PM
- **Sábados**: 8:00 AM - 2:00 PM
- **Urgencias**: 24/7

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para el cuidado de la salud**
