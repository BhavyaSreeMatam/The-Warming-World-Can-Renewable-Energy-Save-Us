function _1(html){return(
html`
<style>
  .hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 40px;
    border-radius: 20px;
    margin: -20px -40px 60px -40px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: 3.5em;
    font-weight: 800;
    margin: 0 0 20px 0;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  
  .hero-subtitle {
    font-size: 1.4em;
    font-weight: 300;
    margin: 0 0 30px 0;
    opacity: 0.95;
    line-height: 1.6;
  }
  
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }
  
  .stat-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 15px;
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
  
  .stat-number {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
    color: #FFD700;
  }
  
  .stat-label {
    font-size: 0.95em;
    margin: 8px 0 0 0;
    opacity: 0.95;
    font-weight: 400;
    color : white;
  }
  
  .context-section {
    background: white;
    padding: 60px 40px;
    border-radius: 20px;
    margin-bottom: 60px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.08);
  }
  
  .context-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.2em;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 25px 0;
    text-align: center;
  }
  
  .intro-text {
    font-size: 1.15em;
    line-height: 1.8;
    color: #444;
    margin-bottom: 30px;
    text-align: justify;
  }
  
  .highlight {
    background: linear-gradient(120deg, #ffeaa7 0%, #fdcb6e 100%);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 600;
    color: #2d3436;
  }
  
  .questions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }
  
  .question-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 25px;
    border-radius: 15px;
    border-left: 5px solid #667eea;
    transition: all 0.3s ease;
  }
  
  .question-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
  }
  
  .question-number {
    font-size: 1.8em;
    font-weight: 700;
    color: #667eea;
    margin: 0 0 10px 0;
  }
  
  .question-text {
    font-size: 1em;
    color: #2c3e50;
    line-height: 1.5;
    margin: 0;
  }
  
  .data-sources {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    margin-top: 40px;
    border: 2px dashed #dee2e6;
  }
  
  .source-title {
    font-size: 1.3em;
    font-weight: 700;
    color: #495057;
    margin: 0 0 20px 0;
    text-align: center;
  }
  
  .source-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .source-item {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .source-name {
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
  }
  
  .source-details {
    font-size: 0.9em;
    color: #6c757d;
    line-height: 1.6;
  }
  
  .scroll-indicator {
    text-align: center;
    margin-top: 40px;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  .scroll-text {
    font-size: 0.9em;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .scroll-arrow {
    font-size: 2em;
    color: #667eea;
  }
</style>

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">The Warming World: Can Renewable Energy Save Us?</h1>
    <p class="hero-subtitle">
      A comprehensive visual analysis of 145 years of global warming, 
      CO₂ emissions, and the race to renewable energy
    </p>
    
    <div class="hero-stats">
      <div class="stat-card">
        <p class="stat-number">+1.2°C</p>
        <p class="stat-label" style = "color:white;">Global Temperature Rise Since 1880</p>
      </div>
      <div class="stat-card">
        <p class="stat-number">145</p>
        <p class="stat-label"style = "color:white;">Years of Temperature Data Analyzed</p>
      </div>
      <div class="stat-card">
        <p class="stat-number">195+</p>
        <p class="stat-label"style = "color:white;">Countries Examined for Regional Warming</p>
      </div>
      <div class="stat-card">
        <p class="stat-number">57</p>
        <p class="stat-label"style = "color:white;">Years of Renewable Energy Tracking</p>
      </div>
    </div>
  </div>
</div>

<div class="context-section">
  <div class="context-content">
    <h2 class="section-title">Why This Matters</h2>
    
    <p class="intro-text">
      Our planet is at a crossroads. <span class="highlight">Global temperatures have risen 1.2°C since pre-industrial times</span>, 
      with the past decade marking the hottest on record. Arctic regions are warming at more than twice the global average, 
      threatening ecosystems and accelerating sea-level rise. Meanwhile, CO₂ concentrations have reached levels not seen 
      in millions of years.
    </p>
    
    <p class="intro-text">
      But there's hope. The <span class="highlight">renewable energy revolution is accelerating</span>, with solar and wind 
      capacity doubling every 16 years globally. Some countries have transformed their energy systems in just a decade, 
      proving that rapid decarbonization is possible. This project explores the data behind both the crisis and the solution.
    </p>
    
    <p class="intro-text">
      Using advanced statistical analysis and interactive visualizations, we investigate <span class="highlight">eight critical questions</span> 
      that reveal how our climate is changing, where the impacts are most severe, and whether our transition to clean energy 
      is fast enough to avoid the worst consequences.
    </p>
    
    <h2 class="section-title" style="margin-top: 50px;">Our Research Questions</h2>
    
    <div class="questions-grid">
      <div class="question-card">
        <p class="question-number">A</p>
        <p class="question-text">How has global temperature changed over time, and when did warming accelerate?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">B</p>
        <p class="question-text">Which regions are experiencing the most rapid warming?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">C</p>
        <p class="question-text">What is the relationship between CO₂ emissions and temperature rise?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">D</p>
        <p class="question-text">Which countries have increased renewable energy in the last decade?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">E</p>
        <p class="question-text">How rapidly is renewable energy capacity growing worldwide?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">F</p>
        <p class="question-text">Is there correlation between warming and renewable adoption?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">G</p>
        <p class="question-text">What cyclical patterns exist in renewable energy adoption?</p>
      </div>
      
      <div class="question-card">
        <p class="question-number">H</p>
        <p class="question-text">What success stories can we learn from?</p>
      </div>
    </div>
    
    <div class="data-sources">
      <h3 class="source-title">Data Sources</h3>
      <div class="source-list">
        <div class="source-item">
          <div class="source-name">NASA GISS Surface Temperature Analysis (GISTEMP v4)</div>
        </div>
        <div class="source-item">
          <div class="source-name">Global Carbon Atlas (Global Carbon Project)</div>
        </div>
        <div class="source-item">
          <div class="source-name">IRENA Renewable Energy Capacity and Generation Statistics</div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <p class="scroll-text">Scroll down to explore the data</p>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</div>
`
)}

function _2(html){return(
html`
<style>
  /* Use the same styles from before, plus these new ones: */
  
  .data-methodology-section {
    background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
    padding: 60px 40px;
    margin: 60px 0;
    border-radius: 20px;
    border: 2px solid #667eea30;
  }
  
  .section-header {
    text-align: left;
    margin-bottom: 50px;
  }
  
  .section-icon {
    font-size: 3em;
    margin-bottom: 15px;
  }
  
  .section-main-title {
    font-size: 2.5em;
    font-weight: 800;
    color: #2c3e50;
    margin: 0;
  }
  
  .section-tagline {
    font-size: 1.2em;
    color: #7f8c8d;
    margin-top: 10px;
    font-style: italic;
  }
  
  .data-sources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 40px 0;
  }
  
  .source-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    border-top: 4px solid #667eea;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .source-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
  
  .source-icon {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  
  .source-name {
    font-size: 1.3em;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 10px 0;
  }
  
  .source-org {
    font-size: 0.95em;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .source-description {
    font-size: 0.95em;
    color: #5a6c7d;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .source-stats {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e9ecef;
  }
  
  .stat-item {
    flex: 1;
  }
  
  .stat-value {
    font-size: 1.4em;
    font-weight: 700;
    color: #667eea;
    display: block;
  }
  
  .stat-label {
    font-size: 0.8em;
    color: #6c757d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .methodology-box {
    background: white;
    padding: 40px;
    border-radius: 15px;
    margin-top: 40px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  }
  
  .methodology-title {
    font-size: 1.8em;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 25px 0;
    text-align: center;
  }
  
  .methodology-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }
  
  .method-item {
    display: flex;
    gap: 15px;
  }
  
  .method-icon {
    font-size: 2em;
    flex-shrink: 0;
  }
  
  .method-content h4 {
    font-size: 1.1em;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 8px 0;
  }
  
  .method-content p {
    font-size: 0.95em;
    color: #5a6c7d;
    line-height: 1.6;
    margin: 0;
  }
  
  .quality-badges {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
  }
  
  .badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 0.9em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  
  .timeline-note {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 20px 25px;
    border-radius: 8px;
    margin-top: 30px;
  }
  
  .timeline-note strong {
    color: #856404;
  }
  
  .timeline-note p {
    margin: 0;
    color: #856404;
    line-height: 1.7;
    display: inline; 
  }
</style>

<div class="data-methodology-section">
  <div class="section-header">
    <h2 class="section-main-title">Data</h2>
    <p class="section-tagline">Built on authoritative climate and energy datasets</p>
  </div>
  
  <div class="data-sources-grid">
    <!-- NASA Temperature Data -->
    <div class="source-card">
      <h3 class="source-name">Temperature Data</h3>
      <div class="source-org">NASA GISS Surface Temperature Analysis (GISTEMP v4)</div>
      <p class="source-description">
        Global surface temperature anomalies compiled from thousands of meteorological stations, 
        ocean buoys, and satellite measurements worldwide.
      </p>
      <div class="source-stats">
        <div class="stat-item">
          <span class="stat-value">145</span>
          <span class="stat-label">Years</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">1880</span>
          <span class="stat-label">Start</span>
        </div>
      </div>
    </div>
    
    <!-- CO2 Emissions Data -->
    <div class="source-card">
      <h3 class="source-name">CO₂ Emissions</h3>
      <div class="source-org">Global Carbon Atlas (Global Carbon Project)</div>
      <p class="source-description">
        Comprehensive emissions tracking across 195+ countries, compiled from UN agencies, 
        national governments, and scientific models.
      </p>
      <div class="source-stats">
        <div class="stat-item">
          <span class="stat-value">79</span>
          <span class="stat-label">Variables</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">195+</span>
          <span class="stat-label">Countries</span>
        </div>
      </div>
    </div>
    
    <!-- Renewable Energy Data -->
    <div class="source-card">
      <h3 class="source-name">Renewable Energy</h3>
      <div class="source-org">IRENA Renewable Energy Capacity and Generation Statistics</div>
      <p class="source-description">
        Renewable energy share data collected directly from national statistics offices 
        and annual industry surveys across all regions.
      </p>
      <div class="source-stats">
        <div class="stat-item">
          <span class="stat-value">57</span>
          <span class="stat-label">Years</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">1965</span>
          <span class="stat-label">Start</span>
        </div>
      </div>
    </div>
  </div>
`
)}

function _3(html){return(
html`
<style>
  .chapter-divider {
    background: linear-gradient(to right, #667eea, #764ba2);
    height: 4px;
    margin: 80px 0 60px 0;
    border-radius: 2px;
  }
  
  .part-header {
    text-align: left;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border-radius: 15px;
  }
  
  .part-number {
    font-size: 1em;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
  }
  
  .part-title {
    font-size: 3em;
    font-weight: 900;
    color: #2c3e50;
    margin: 10px 0 20px 0;
    line-height: 1.2;
  }
  
  .part-description {
    text-align: left;
    font-size: 1.3em;
    color: #5a6c7d;
    font-style: italic;
    max-width: 700px;
    margin: 0;
  }
  
  .chapter-header {
    text-align: left;
    margin-bottom: 50px;
    max-width: 900px;        
  margin-left: auto;       
  margin-right: auto;      
  }
  
  .chapter-number {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  
  .chapter-title {
    font-size: 2.5em;
    font-weight: 800;
    color: #2c3e50;
    margin: 10px 0;
    line-height: 1.2;
  }
  
  .chapter-subtitle {
    font-size: 1.2em;
    font-style: italic;
    color: #7f8c8d;
    font-weight: 400;
    margin-top: 15px;
    display : inline;
  }
  
  .intro-box {
    max-width: 850px;
    margin: 0 auto 40px auto;
    background: #fff5f5;
    padding: 15px 20px;
    border-radius: 12px;
    border-left: 5px solid #e74c3c;
  }
  
  .intro-text {
    font-size: 1.1em;
    line-height: 1.7;
    color: #2c3e50;
    margin: 0;
    display: inline; 
  }
  
  .periods-grid {
    max-width: 900px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  }
  
  .period-card {
    background: white;
    padding: 18px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
  }
  
  .period-card:hover {
    transform: translateY(-3px);
  }
  
  .period-name {
    font-size: 0.8em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .period-rate {
    font-size: 1.3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 5px;
  }
  
  .period-note {
    font-size: 0.85em;
    color: #5a6c7d;
    line-height: 1.3;
  }
  
  .viz-intro {
    text-align: center;
    max-width: 900px;
    margin: 40px auto 30px auto;
    padding: 18px 25px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 12px;
    font-size: 0.95em;
    color: #1565c0;
    line-height: 1.5;
    font-weight: 500;
  }
</style>

<!-- PART 1: THE CLIMATE CRISIS -->
<div class="chapter-divider"></div>

<div class="part-header">
  <div class="part-number">Part 1: The Climate Crisis</div>
  <h1 class="part-title">A Warming Planet</h1>
  <p class="part-description">Understanding the scale and pace of global warming</p>
</div>

<!-- QUESTION A -->
<div class="chapter-header">
  <h2 class="chapter-title">The Acceleration of Warming</h2>
  <p class="chapter-subtitle">How has global temperature changed over time, and when did warming accelerate?</p>
</div>

<div class="intro-box">
  <p class="intro-text">
    For 10,000 years, Earth's temperature remained stable. In just 145 years, that stability has shattered. 
    We analyze NASA temperature data to understand <strong>when</strong> and <strong>how fast</strong> warming accelerated 
    across distinct historical periods.
  </p>
</div>

<div class="periods-grid">
  <div class="period-card">
    <div class="period-name">Pre-1920</div>
    <div class="period-rate">-0.046°C/decade</div>
    <div class="period-note">Early Industrial</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">1920-1945</div>
    <div class="period-rate">+0.179°C/decade</div>
    <div class="period-note">First warming</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">1945-1975</div>
    <div class="period-rate">+0.021°C/decade</div>
    <div class="period-note">Aerosol pause</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">1975-2000</div>
    <div class="period-rate">+0.168°C/decade</div>
    <div class="period-note">Warming resumes</div>
  </div>
  
  <div class="period-card" style="border-left-color: #e74c3c;">
    <div class="period-name" style="color: #e74c3c;">2000-Present</div>
    <div class="period-rate" style="color: #e74c3c;">+0.260°C/decade</div>
    <div class="period-note" style="font-weight: 600; color: #e74c3c;">Rapid acceleration</div>
  </div>
</div>

<div class="viz-intro">
  Hover over the chart to explore 145 years of data.
</div>
`
)}

async function _4(FileAttachment,d3)
{
  // Load the temperature data
  const data = await FileAttachment("Question_A_Temperature_Data.csv").csv({typed: true});
  
  // Set up dimensions
  const width = 960;
  const height = 600;
  const margin = {top: 60, right: 120, bottom: 80, left: 80};
  
  // Create SVG
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .style("background", "#f9f9f9");
  
  // Create scales
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Year))
    .range([margin.left, width - margin.right]);
  
  const y = d3.scaleLinear()
    .domain([
      d3.min(data, d => d.Temperature_Anomaly) - 0.3,
      d3.max(data, d => d.Temperature_Anomaly) + 0.2
    ])
    .range([height - margin.bottom, margin.top]);
  
  // Define acceleration periods with colors and labels
  const periods = [
    {start: 1880, end: 1910, color: "#e3f2fd", label: "Early Period (Stable)"},
    {start: 1910, end: 1940, color: "#fff3e0", label: "Early Warming"},
    {start: 1940, end: 1970, color: "#f3e5f5", label: "Mid-Century Pause"},
    {start: 1970, end: 2023, color: "#ffebee", label: "Rapid Acceleration"}
  ];
  
  // Add period background shading
  periods.forEach(period => {
    svg.append("rect")
      .attr("x", x(period.start))
      .attr("y", margin.top)
      .attr("width", x(period.end) - x(period.start))
      .attr("height", height - margin.top - margin.bottom)
      .attr("fill", period.color)
      .attr("opacity", 0.4);
  });
  
  // Add zero reference line
  svg.append("line")
    .attr("x1", margin.left)
    .attr("x2", width - margin.right)
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("stroke", "#666")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4,4");
  
  svg.append("text")
    .attr("x", width - margin.right + 5)
    .attr("y", y(0))
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .attr("fill", "#666")
    .text("Baseline (0°C)");
  
  // Create line generators
  const line = d3.line()
    .defined(d => !isNaN(d.Temperature_Anomaly))
    .x(d => x(d.Year))
    .y(d => y(d.Temperature_Anomaly))
    .curve(d3.curveMonotoneX);
  
  const smoothedLine = d3.line()
    .defined(d => !isNaN(d.Smoothed))
    .x(d => x(d.Year))
    .y(d => y(d.Smoothed))
    .curve(d3.curveMonotoneX);
  
  // Add area fill under the temperature line
  const area = d3.area()
    .defined(d => !isNaN(d.Temperature_Anomaly))
    .x(d => x(d.Year))
    .y0(y(0))
    .y1(d => y(d.Temperature_Anomaly))
    .curve(d3.curveMonotoneX);
  
  svg.append("path")
    .datum(data)
    .attr("fill", "url(#temperature-gradient)")
    .attr("opacity", 0.3)
    .attr("d", area);
  
  // Define gradient for area fill
  const gradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "temperature-gradient")
    .attr("x1", "0%")
    .attr("y1", "100%")
    .attr("x2", "0%")
    .attr("y2", "0%");
  
  gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#2196F3")
    .attr("stop-opacity", 0.3);
  
  gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#f44336")
    .attr("stop-opacity", 0.8);
  
  // Add the annual temperature line (thin, light)
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#e57373")
    .attr("stroke-width", 1)
    .attr("opacity", 0.5)
    .attr("d", line);
  
  // Add the smoothed trend line (thick, prominent)
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#d32f2f")
    .attr("stroke-width", 3.5)
    .attr("d", smoothedLine);
  
  // Create axes
  const xAxis = d3.axisBottom(x)
    .tickFormat(d3.format("d"))
    .ticks(14)
    .tickSize(-height + margin.top + margin.bottom);
  
  const yAxis = d3.axisLeft(y)
    .ticks(10)
    .tickSize(-width + margin.left + margin.right);
  
  // Add X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    .call(g => g.select(".domain").attr("stroke", "#999"))
    .call(g => g.selectAll(".tick line")
      .attr("stroke", "#ddd")
      .attr("stroke-opacity", 0.7))
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "12px")
      .attr("fill", "#333"));
  
  // Add Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis)
    .call(g => g.select(".domain").attr("stroke", "#999"))
    .call(g => g.selectAll(".tick line")
      .attr("stroke", "#ddd")
      .attr("stroke-opacity", 0.7))
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "12px")
      .attr("fill", "#333"));
  
  // Add axis labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .attr("fill", "#333")
    .text("Year");
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .attr("fill", "#333")
    .text("Temperature Anomaly (°C)");
  
  // Add title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "20px")
    .attr("font-weight", "bold")
    .attr("fill", "#1a1a1a")
    .text("Global Temperature Change");
  

  
  // Add period labels
  svg.append("text")
    .attr("x", x(1895))
    .attr("y", margin.top + 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("fill", "#555")
    .text("Stable");
  
  svg.append("text")
    .attr("x", x(1925))
    .attr("y", margin.top + 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("fill", "#e65100")
    .attr("font-weight", "600")
    .text("Early Warming");
  
  svg.append("text")
    .attr("x", x(1955))
    .attr("y", margin.top + 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("fill", "#555")
    .text("Pause");
  
  svg.append("text")
    .attr("x", x(1996))
    .attr("y", margin.top + 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("font-weight", "700")
    .attr("fill", "#c62828")
    .text("RAPID ACCELERATION");
  
  // Add key statistics box
  const statsGroup = svg.append("g")
    .attr("transform", `translate(${width - margin.right + 10}, ${margin.top})`);
  
  statsGroup.append("rect")
    .attr("width", 110)
    .attr("height", 140)
    .attr("fill", "white")
    .attr("stroke", "#ccc")
    .attr("rx", 4);
  
  const stats = [
    {label: "Total Warming:", value: "1.2°C"},
    {label: "1880-1940:", value: "0.07°C/decade"},
    {label: "1970-2023:", value: "0.18°C/decade"},
    {label: "Recent (2014-23):", value: "1.1°C avg"},
    {label: "Hottest Year:", value: "2023"}
  ];
  
  stats.forEach((stat, i) => {
    statsGroup.append("text")
      .attr("x", 8)
      .attr("y", 20 + i * 24)
      .attr("font-size", "9px")
      .attr("fill", "#666")
      .text(stat.label);
    
    statsGroup.append("text")
      .attr("x", 8)
      .attr("y", 20 + i * 24 + 12)
      .attr("font-size", "11px")
      .attr("font-weight", "bold")
      .attr("fill", "#d32f2f")
      .text(stat.value);
  });
  
  // Add legend
  const legend = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${height - 50})`);
  
  legend.append("line")
    .attr("x1", 0)
    .attr("x2", 30)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("stroke", "#e57373")
    .attr("stroke-width", 1)
    .attr("opacity", 0.5);
  
  legend.append("text")
    .attr("x", 35)
    .attr("y", 0)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .text("Annual Temperature");
  
  legend.append("line")
    .attr("x1", 180)
    .attr("x2", 210)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("stroke", "#d32f2f")
    .attr("stroke-width", 3.5);
  
  legend.append("text")
    .attr("x", 215)
    .attr("y", 0)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .text("Smoothed Trend");
  
  // INTERACTIVE FEATURES
  
  // Create tooltip
  const tooltip = svg.append("g")
    .attr("pointer-events", "none")
    .style("display", "none");
  
  tooltip.append("rect")
    .attr("width", 180)
    .attr("height", 90)
    .attr("fill", "white")
    .attr("stroke", "#333")
    .attr("stroke-width", 2)
    .attr("rx", 6)
    .attr("opacity", 0.95);
  
  const tooltipText = tooltip.append("text")
    .attr("x", 10)
    .attr("y", 20)
    .attr("font-size", "12px");
  
  // Create vertical line for hover
  const hoverLine = svg.append("line")
    .attr("stroke", "#333")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "3,3")
    .style("display", "none");
  
  // Create hover circle
  const hoverCircle = svg.append("circle")
    .attr("r", 5)
    .attr("fill", "#d32f2f")
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .style("display", "none");
  
  // Add invisible overlay for mouse tracking
  svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mousemove", function(event) {
      const [xPos, yPos] = d3.pointer(event);
      const year = Math.round(x.invert(xPos));
      const dataPoint = data.find(d => d.Year === year);
      
      if (dataPoint) {
        // Show hover elements
        hoverLine.style("display", null)
          .attr("x1", x(dataPoint.Year))
          .attr("x2", x(dataPoint.Year))
          .attr("y1", margin.top)
          .attr("y2", height - margin.bottom);
        
        hoverCircle.style("display", null)
          .attr("cx", x(dataPoint.Year))
          .attr("cy", y(dataPoint.Temperature_Anomaly));
        
        tooltip.style("display", null);
        
        // Position tooltip
        let tooltipX = x(dataPoint.Year) + 15;
        let tooltipY = y(dataPoint.Temperature_Anomaly) - 50;
        
        // Adjust if tooltip goes off screen
        if (tooltipX > width - 200) tooltipX = x(dataPoint.Year) - 195;
        if (tooltipY < margin.top) tooltipY = y(dataPoint.Temperature_Anomaly) + 15;
        
        tooltip.attr("transform", `translate(${tooltipX},${tooltipY})`);
        
        // Update tooltip text
        tooltipText.selectAll("*").remove();
        
        tooltipText.append("tspan")
          .attr("x", 10)
          .attr("dy", "0em")
          .attr("font-weight", "bold")
          .attr("font-size", "14px")
          .text(`Year: ${dataPoint.Year}`);
        
        tooltipText.append("tspan")
          .attr("x", 10)
          .attr("dy", "1.5em")
          .attr("fill", dataPoint.Temperature_Anomaly > 0 ? "#d32f2f" : "#1976d2")
          .text(`Temp: ${dataPoint.Temperature_Anomaly > 0 ? "+" : ""}${dataPoint.Temperature_Anomaly.toFixed(2)}°C`);
        
        tooltipText.append("tspan")
          .attr("x", 10)
          .attr("dy", "1.3em")
          .attr("font-size", "10px")
          .attr("fill", "#666")
          .text(`Smoothed: ${dataPoint.Smoothed.toFixed(2)}°C`);
        
        tooltipText.append("tspan")
          .attr("x", 10)
          .attr("dy", "1.3em")
          .attr("font-size", "10px")
          .attr("fill", "#666")
          .text(`Rate: ${(dataPoint.Rate_per_Decade || 0).toFixed(3)}°C/decade`);
        
        // Determine period
        let period = "Early Period";
        if (year >= 1970) period = "Rapid Acceleration";
        else if (year >= 1940) period = "Mid-Century";
        else if (year >= 1910) period = "Early Warming";
        
        tooltipText.append("tspan")
          .attr("x", 10)
          .attr("dy", "1.3em")
          .attr("font-size", "9px")
          .attr("fill", "#888")
          .attr("font-style", "italic")
          .text(`Period: ${period}`);
      }
    })
    .on("mouseout", function() {
      tooltip.style("display", "none");
      hoverLine.style("display", "none");
      hoverCircle.style("display", "none");
    });
  
  return svg.node();
}


function _5(html){return(
html`
<style>
  /* Reuse all the previous styles, plus add these: */
   .periods-grid {
    max-width: 900px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
  }
  
  .period-card {
    background: white;
    padding: 18px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
  }
  
  .period-card:hover {
    transform: translateY(-3px);
  }
  
  .period-name {
    font-size: 0.8em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .period-rate {
    font-size: 1.3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 5px;
  }
  
  .period-note {
    font-size: 0.85em;
    color: #5a6c7d;
    line-height: 1.3;
  }
  .insight-box {
    background: linear-gradient(135deg, #FEFFDB 0%, #fdcb6e 100%);
    padding: 30px 50px;
    border-radius: 15px;
    margin: 50px auto;
    max-width: 850px;
    box-shadow: 0 5px 20px rgba(253, 203, 110, 0.3);
  }
  
  .insight-title {
    font-size: 1.4em;
    font-weight: 700;
    color: #2d3436;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .insight-content {
    font-size: 1.0em;
    color: #2d3436;
    line-height: 1.7;
  }
  
  .insight-list {
    margin: 15px 0 0 0;
    padding-left: 0;
    list-style: none;
    display: inline; 
  }
  
  .insight-list li {
    padding: 10px 0 10px 35px;
    position: relative;
    line-height: 1.6; 
  }
  
  .insight-list li:before {
    content: "→";
    position: absolute;
    left: 0;
    font-weight: 700;
    color: #d63031;
    font-size: 1.3em;
  }
  
  .highlight-stat {
    background: linear-gradient(120deg, #fdcb6e 0%, #ffeaa7 100%);
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: #2d3436;
  }
  
  .transition-section {
    max-width: 900px;
    margin: 70px auto 60px auto;
    text-align: center;
  }
  
  .transition-text {
    font-size: 1.35em;
    font-weight: 600;
    color: #667eea;
    font-style: italic;
    padding: 25px;
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border-radius: 12px;
    border: 2px dashed #667eea;
    margin-bottom: 20px;
  }
  
  .chapter-divider-small {
    background: linear-gradient(to right, #667eea, #764ba2);
    height: 3px;
    margin: 60px auto;
    border-radius: 2px;
    max-width: 200px;
  }
</style>

<!-- KEY FINDINGS BOX (After Visualization 1) -->
<div class="insight-box">
  <div class="insight-title">
    <span>💡</span> Key Findings from Temperature Analysis
  </div>
  <div class="insight-content">
    <ul class="insight-list">
      <li><strong>Total warming:</strong> <span class="highlight-stat">+1.45°C</span> since 1880 ((1880: -0.17, 2024: 1.28 = 1.45°C))</li>
      <li><strong>Modern acceleration:</strong> 21st century warming is <span class="highlight-stat">12x faster</span> than mid-20th century</li>
      <li><strong>Recent decade average:</strong> 0.93°C above baseline (2014-2023)</li>
      <li><strong>Record years:</strong> 2023 (+1.17°C) and 2024 (+1.28°C) shattered all records</li>
    </ul>
  </div>
</div>

<!-- TRANSITION TO QUESTION B -->
<div class="transition-section">
  <div class="transition-text">
    Global warming affects the entire planet but not equally. Some regions are heating up much faster than others...
  </div>
  <div class="chapter-divider-small"></div>
</div>

<!-- QUESTION B HEADER -->
<div class="chapter-header">
  <h2 class="chapter-title">The Arctic Amplification Crisis</h2>
  <p class="chapter-subtitle">Which regions are experiencing the most rapid warming?</p>
</div>

<div class="intro-box">
  <p class="intro-text">
    This analysis examines the portion of warming <strong>attributed specifically to CO₂ emissions</strong> 
    across 215 countries, comparing baseline temperatures (1961-1990) to recent measurements (2011-2020). 
    While total observed warming reaches 1.45°C globally, we isolate <strong>CO₂'s specific contribution</strong> 
    to understand which regions are most affected by carbon emissions.
  </p>
</div>

<div class="periods-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <div class="period-card">
    <div class="period-name">Global Average</div>
    <div class="period-rate">+0.03°C</div>
    <div class="period-note">Average CO₂-attributed warming</div>
  </div>
  
  <div class="period-card" style="border-left-color: #e74c3c;">
    <div class="period-name" style="color: #e74c3c;">Highest Warming</div>
    <div class="period-rate" style="color: #e74c3c;">+0.11°C</div>
    <div class="period-note" style="color: #e74c3c;">United States (top country)</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">Arctic Nations</div>
    <div class="period-rate">+0.01°C avg</div>
    <div class="period-note">Russia, Canada combined</div>
  </div>
</div>

<div class="viz-intro">
  Hover over countries to see baseline vs. recent temperatures. Blue = cooler baseline, Red = warmer recent.
</div>
`
)}

async function _6(FileAttachment,d3)
{
  // Load the regional warming data
  const data = await FileAttachment("Question_B_Regional_Warming.csv").csv({typed: true});
  
  // Get top 12 countries (fewer because we need 2 bars each)
  const topCountries = data
    .filter(d => d.warming_per_decade > 0 && d.country)
    .sort((a, b) => b.warming_per_decade - a.warming_per_decade)
    .slice(0, 12);
  
  // Dimensions
  const width = 1100;
  const height = 800;
  const margin = {top: 120, right: 250, bottom: 80, left: 180};
  
  // Create SVG
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#ffffff");
  
  // Scales
  const x = d3.scaleLinear()
    .domain([
      d3.min(topCountries, d => Math.min(d.baseline_temp, d.recent_temp)) - 2,
      d3.max(topCountries, d => d.recent_temp) + 2
    ])
    .range([margin.left, width - margin.right]);
  
  const y = d3.scaleBand()
    .domain(topCountries.map(d => d.country))
    .range([margin.top, height - margin.bottom])
    .padding(0.25);
  
  // Bar height for grouped bars
  const barHeight = y.bandwidth() / 2.5;
  
  // Color scheme
  const baselineColor = "#90CAF9"; // Light blue
  const recentColor = "#EF5350"; // Red
  
  // Grid lines
  svg.append("g")
    .selectAll("line")
    .data(x.ticks(10))
    .join("line")
    .attr("x1", d => x(d))
    .attr("x2", d => x(d))
    .attr("y1", margin.top)
    .attr("y2", height - margin.bottom)
    .attr("stroke", "#e0e0e0")
    .attr("stroke-width", 1);
  
  // Add zero reference line (if temperatures go below 0)
  if (x.domain()[0] < 0) {
    svg.append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y1", margin.top)
      .attr("y2", height - margin.bottom)
      .attr("stroke", "#999")
      .attr("stroke-width", 1.5);
  }
  
  // Create country groups
  const countryGroups = svg.selectAll(".country-group")
    .data(topCountries)
    .join("g")
    .attr("class", "country-group");
  
  // BASELINE BARS (1961-1990)
  countryGroups.append("rect")
    .attr("class", "baseline-bar")
    .attr("x", margin.left)
    .attr("y", d => y(d.country) + 2)
    .attr("width", d => Math.max(0, x(d.baseline_temp) - margin.left))
    .attr("height", barHeight)
    .attr("fill", baselineColor)
    .attr("stroke", "#42A5F5")
    .attr("stroke-width", 1.5)
    .attr("rx", 2);
  
  // RECENT BARS (2011-2020)
  countryGroups.append("rect")
    .attr("class", "recent-bar")
    .attr("x", margin.left)
    .attr("y", d => y(d.country) + barHeight + 4)
    .attr("width", d => Math.max(0, x(d.recent_temp) - margin.left))
    .attr("height", barHeight)
    .attr("fill", recentColor)
    .attr("stroke", "#E53935")
    .attr("stroke-width", 1.5)
    .attr("rx", 2);
  
  // BASELINE VALUE LABELS
  countryGroups.append("text")
    .attr("x", d => x(d.baseline_temp) + 5)
    .attr("y", d => y(d.country) + barHeight / 2 + 2)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", "#1565C0")
    .text(d => d.baseline_temp.toFixed(1) + "°C");
  
  // RECENT VALUE LABELS
  countryGroups.append("text")
    .attr("x", d => x(d.recent_temp) + 5)
    .attr("y", d => y(d.country) + barHeight * 1.5 + 4)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", "#C62828")
    .text(d => d.recent_temp.toFixed(1) + "°C");
  
  // WARMING AMOUNT (difference)
  countryGroups.append("text")
    .attr("x", width - margin.right + 10)
    .attr("y", d => y(d.country) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "#d32f2f")
    .text(d => `+${d.total_warming.toFixed(2)}°C`);
  
  // Arctic indicator
  countryGroups.filter(d => d.is_arctic)
    .append("text")
    .attr("x", margin.left - 15)
    .attr("y", d => y(d.country) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    
  
  // Connection lines showing the increase
  countryGroups.append("line")
    .attr("x1", d => x(d.baseline_temp))
    .attr("x2", d => x(d.recent_temp))
    .attr("y1", d => y(d.country) + barHeight + 2)
    .attr("y2", d => y(d.country) + barHeight + 2)
    .attr("stroke", "#FF9800")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrow)");
  
  // Define arrow marker
  svg.append("defs")
    .append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 8)
    .attr("refY", 5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#FF9800");
  
  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(10))
    .call(g => g.select(".domain").attr("stroke", "#999"))
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "11px"));
  
  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "13px")
      .attr("font-weight", d => {
        const country = topCountries.find(c => c.country === d);
        return country && country.is_arctic ? "700" : "400";
      })
      .attr("fill", d => {
        const country = topCountries.find(c => c.country === d);
        return country && country.is_arctic ? "#d32f2f" : "#333";
      }));
  
  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", "bold")
    .attr("fill", "#1a1a1a")
    .text("Regional Temperature Change: Before & After Comparison");
  
  // Subtitle
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 55)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("fill", "#555")
    .text("Comparing baseline period (1961-1990) to recent period (2011-2020)");
  
  // Period labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 80)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#1565C0")
    .attr("font-weight", "600")
    
  
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 98)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#C62828")
    .attr("font-weight", "600")
    
  
  // X axis label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "600")
    .text("Average Temperature (°C)");
  
  // Right side label
  svg.append("text")
    .attr("x", width - margin.right + 50)
    .attr("y", margin.top - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", "#d32f2f")
    .text("Total Warming");
  
  // Legend box
  const legend = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${height - 60})`);
  
  // Baseline legend
  legend.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 30)
    .attr("height", 15)
    .attr("fill", baselineColor)
    .attr("stroke", "#42A5F5")
    .attr("stroke-width", 1.5)
    .attr("rx", 2);
  
  legend.append("text")
    .attr("x", 35)
    .attr("y", 7.5)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .text("1961-1990 Baseline (cooler)");
  
  // Recent legend
  legend.append("rect")
    .attr("x", 220)
    .attr("y", 0)
    .attr("width", 30)
    .attr("height", 15)
    .attr("fill", recentColor)
    .attr("stroke", "#E53935")
    .attr("stroke-width", 1.5)
    .attr("rx", 2);
  
  legend.append("text")
    .attr("x", 255)
    .attr("y", 7.5)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .text("2011-2020 Recent (warmer)");
  
  // Arrow legend
  legend.append("line")
    .attr("x1", 440)
    .attr("x2", 480)
    .attr("y1", 7.5)
    .attr("y2", 7.5)
    .attr("stroke", "#FF9800")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrow)");
  
  legend.append("text")
    .attr("x", 490)
    .attr("y", 7.5)
    .attr("dy", "0.35em")
    .attr("font-size", "11px")
    .text("= Temperature increase");
  
  // Stats box
  const statsBox = svg.append("g")
    .attr("transform", `translate(${width - 190}, ${margin.top + 30})`);
  
  statsBox.append("rect")
    .attr("width", 180)
    .attr("height", 150)
    .attr("fill", "#fff3e0")
    .attr("stroke", "#FF9800")
    .attr("stroke-width", 2)
    .attr("rx", 6);
  
  statsBox.append("text")
    .attr("x", 90)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "700")
    .attr("fill", "#E65100")
    .text("KEY FINDINGS");
  
  const avgWarming = d3.mean(topCountries, d => d.total_warming);
  const maxWarming = d3.max(topCountries, d => d.total_warming);
  const arcticCount = topCountries.filter(d => d.is_arctic).length;
  
  const stats = [
    {label: "Average warming:", value: `${avgWarming.toFixed(2)}°C`},
    {label: "Highest warming:", value: `${maxWarming.toFixed(2)}°C`},
    {label: "Arctic countries:", value: `${arcticCount}/${topCountries.length}`},
  ];
  
  stats.forEach((stat, i) => {
    statsBox.append("text")
      .attr("x", 15)
      .attr("y", 55 + i * 35)
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .text(stat.label);
    
    statsBox.append("text")
      .attr("x", 15)
      .attr("y", 70 + i * 35)
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .attr("fill", "#d32f2f")
      .text(stat.value);
  });
  
  // Interactive tooltips
  const tooltip = svg.append("g")
    .attr("pointer-events", "none")
    .style("display", "none");
  
  tooltip.append("rect")
    .attr("width", 240)
    .attr("height", 120)
    .attr("fill", "white")
    .attr("stroke", "#333")
    .attr("stroke-width", 2)
    .attr("rx", 6)
    .attr("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.2))");
  
  const tooltipText = tooltip.append("text");
  
  countryGroups
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      d3.select(this).selectAll("rect").attr("opacity", 0.7);
      
      tooltip.style("display", null);
      
      let tooltipX = x(d.recent_temp) + 20;
      let tooltipY = y(d.country);
      
      if (tooltipX > width - 260) tooltipX = x(d.baseline_temp) - 250;
      if (tooltipY > height - 150) tooltipY = height - 150;
      
      tooltip.attr("transform", `translate(${tooltipX},${tooltipY})`);
      
      tooltipText.selectAll("*").remove();
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 25)
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text(`${d.country} ${d.is_arctic ? "" : ""}`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 48)
        .attr("font-size", "11px")
        .attr("fill", "#1565C0")
        .text(`1961-90: ${d.baseline_temp.toFixed(2)}°C`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 66)
        .attr("font-size", "11px")
        .attr("fill", "#C62828")
        .text(`2011-20: ${d.recent_temp.toFixed(2)}°C`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 88)
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#d32f2f")
        .text(`Total warming: +${d.total_warming.toFixed(2)}°C`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 106)
        .attr("font-size", "10px")
        .attr("fill", "#666")
        .text(`Rate: ${d.warming_per_decade.toFixed(2)}°C/decade`);
    })
    .on("mouseout", function() {
      d3.select(this).selectAll("rect").attr("opacity", 1);
      tooltip.style("display", "none");
    });
  
  return svg.node();
}


function _7(html){return(
html`
<style>
  /* Reuse previous styles, these are additions */
   .periods-grid {
    max-width: 1100px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .period-card {
    background: white;
    padding: 15px 20px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .period-card:hover {
    transform: translateY(-3px);
  }
  
  .period-name {
    font-size: 0.8em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .period-rate {
    font-size: 1.3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 5px;
  }
  
  .period-note {
    font-size: 0.75em;
    color: #5a6c7d;
    line-height: 1.3;
  }

   .part-header {
    text-align: left;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border-radius: 15px;
  }
  
  .part-number {
    font-size: 1em;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
  }
  
  .part-title {
    font-size: 3em;
    font-weight: 900;
    color: #2c3e50;
    margin: 10px 0 20px 0;
    line-height: 1.2;
    display: inline;
  }
  
  .part-description {
    text-align: left;
    font-size: 1.3em;
    color: #5a6c7d;
    font-style: italic;
    max-width: 700px;
    margin: 0;
  }

.insight-box-blue {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 30px 40px;
    border-radius: 15px;
    margin: 50px auto;
    max-width: 900px;
    box-shadow: 0 5px 20px rgba(33, 150, 243, 0.2);
  }
  
  .insight-title-blue {
    font-size: 1.4em;
    font-weight: 700;
    color: #0d47a1;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .insight-content-blue {
    font-size: 1.0em;
    color: #0d47a1;
    line-height: 1.7;
  }
  
  .callout-box {
    background: #fff3cd;
    border-left: 5px solid #ff9800;
    padding: 20px 25px;
    border-radius: 8px;
    margin: 40px auto;
    max-width: 900px;
  }
  
  .callout-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #e65100;
    margin: 0 0 12px 0;
  }
  
  .callout-text {
    font-size: 1.0em;
    color: #856404;
    line-height: 1.7;
    margin: 0;
    display :inline;
  }
  
  .bridge-section {
    max-width: 900px;
    margin: 70px auto;
    padding: 30px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
    border: 3px solid #667eea;
  }
  
  .bridge-question {
    font-size: 1.6em;
    font-weight: 700;
    color: #2c3e50;
    text-align: left;
    margin: 0 0 25px 0;
    line-height: 1.4;
  }
  
  .bridge-answer {
    font-size: 1.15em;
    color: #34495e;
    text-align: center;
    line-height: 1.7;
    font-style: italic;
    display :inline;
  }
</style>

<!-- KEY FINDINGS FROM QUESTION B -->
<div class="insight-box-blue">
  <div class="insight-title-blue"> Key Findings: Geographic Inequality of Warming
  </div>
  <div class="insight-content-blue">
    <ul class="insight-list" style="color: #0d47a1;">
      <li><strong>Attribution analysis:</strong> Isolates warming specifically from <span class="highlight-stat">CO₂ emissions</span> across 195 countries</li>
      <li><strong>Top contributors:</strong> United States (+0.11°C), China (+0.09°C), Russia (+0.04°C) show highest CO₂-attributed warming</li>
      <li><strong>Average impact:</strong> CO₂ has contributed approximately <span class="highlight-stat">0.03°C</span> on average globally</li>
      <li><strong>Historical emitters lead:</strong> Countries with largest cumulative emissions show highest CO₂-attributed warming values</li>
      <li><strong>Context matters:</strong> Total global warming is 1.45°C, these values show CO₂'s isolated contribution (subset of total warming)</li>
    </ul>
  </div>
</div>


<!-- TRANSITION BRIDGE -->
<div class="bridge-section">
  <div class="bridge-question"> The Critical Question: What's Driving This Warming? </div>
  <p class="bridge-answer">
  <p class="bridge-answer">
  We've measured the damage and traced it to its source. But here's the terrifying part: 
  <strong>CO₂ emissions don't just cause warming,they lock it in for decades.</strong>We're setting time bombs.
</p>
  </p>
</div>

<!-- CHAPTER DIVIDER -->
<div class="chapter-divider"></div>

<!-- PART 2 HEADER -->
<div class="part-header">
  <div class="part-number">Part 2: The Smoking Gun</div>
  <h1 class="part-title"> Proving the CO₂ Connection</h1>
  <p class="part-description">Linking emissions to temperature rise</p>
</div>

<!-- QUESTION C HEADER -->
<div class="chapter-header">
  <h2 class="chapter-title">The 15-20 Year Time Bomb</h2>
  <p class="chapter-subtitle">How do trends in CO₂ emissions compare to temperature changes?</p>
</div>

<div class="intro-box">
  <p class="intro-text">
    Climate skeptics once argued correlation isn't causation. We put that to the test by analyzing 
    <strong>145 years</strong> of CO₂ emissions against temperature data. The relationship is undeniable 
    but there's a dangerous lag effect.
  </p>
</div>

<div class="periods-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
  <div class="period-card">
    <div class="period-name">Correlation</div>
    <div class="period-rate">93%</div>
    <div class="period-note">CO₂ vs temperature (r=0.933)</div>
  </div>
  
  <div class="period-card" style="border-left-color: #ff9800;">
    <div class="period-name" style="color: #ff9800;">Time Lag</div>
    <div class="period-rate" style="color: #ff9800;">30 years</div>
    <div class="period-note" style="color: #ff9800;">Peak correlation delay</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">Recent Trend</div>
    <div class="period-rate">Both ↑</div>
    <div class="period-note">Exponential acceleration</div>
  </div>
  
  <div class="period-card" style="border-left-color: #e74c3c;">
    <div class="period-name" style="color: #e74c3c;">Peak Decade</div>
    <div class="period-rate" style="color: #e74c3c;">2010-2020</div>
    <div class="period-note" style="color: #e74c3c;">Record CO₂ & temp</div>
  </div>
</div>

<div class="viz-intro">
  Explore the dual-line chart showing CO₂ (orange) and temperature (red) over 145 years.
</div>
`
)}

async function _8(FileAttachment,d3)
{
  // Load the correlation data
  const data = await FileAttachment("Question_C_CO2_Temperature_Correlation.csv").csv({typed: true});
  
  // Filter to reasonable time range (1880-2023)
  const timeData = data.filter(d => d.year >= 1880 && d.year <= 2023);
  
  // Dimensions
  const width = 1200;
  const height = 700;
  const margin = {top: 100, right: 120, bottom: 80, left: 80};
  
  // Create SVG
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#ffffff");

  
  // Scales
  const x = d3.scaleLinear()
    .domain(d3.extent(timeData, d => d.year))
    .range([margin.left, width - margin.right]);
  
  // Temperature scale (left y-axis)
  const yTemp = d3.scaleLinear()
    .domain([
      d3.min(timeData, d => d.temperature_anomaly) - 0.1,
      d3.max(timeData, d => d.temperature_anomaly) + 0.1
    ])
    .range([height - margin.bottom, margin.top]);
  
  // CO2 scale (right y-axis)
  const yCO2 = d3.scaleLinear()
    .domain([0, d3.max(timeData, d => d.co2) * 1.1])
    .range([height - margin.bottom, margin.top]);
  
  // Add background gradient
  const gradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "bg-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");
  
  gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#e3f2fd")
    .attr("stop-opacity", 0.3);
  
  gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#ffebee")
    .attr("stop-opacity", 0.3);
  
  svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("fill", "url(#bg-gradient)");
  
  // Grid lines
  svg.append("g")
    .attr("class", "grid")
    .selectAll("line")
    .data(x.ticks(15))
    .join("line")
    .attr("x1", d => x(d))
    .attr("x2", d => x(d))
    .attr("y1", margin.top)
    .attr("y2", height - margin.bottom)
    .attr("stroke", "#e0e0e0")
    .attr("stroke-width", 1);
  
  // Zero reference line for temperature
  svg.append("line")
    .attr("x1", margin.left)
    .attr("x2", width - margin.right)
    .attr("y1", yTemp(0))
    .attr("y2", yTemp(0))
    .attr("stroke", "#999")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4,4");
  
  // Create a clipping rectangle to constrain all elements
const clipPath = svg.append("defs")
  .append("clipPath")
  .attr("id", "chart-clip");

clipPath.append("rect")
  .attr("x", margin.left)
  .attr("y", margin.top)
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom);

// Create a group for all chart elements that should be clipped
const chartGroup = svg.append("g")
  .attr("clip-path", "url(#chart-clip)");

// Area under CO2 curve - WITHOUT curve smoothing
const areaCO2 = d3.area()
  .x(d => x(d.year))
  .y0(height - margin.bottom)
  .y1(d => yCO2(d.co2))
  .defined(d => d.co2 != null);  // Only draw where data exists

chartGroup.append("path")
  .datum(timeData)
  .attr("d", areaCO2)
  .attr("fill", "#FF9800")
  .attr("opacity", 0.15);

// Area under temperature curve (only positive anomalies) - WITHOUT curve smoothing
const areaTemp = d3.area()
  .x(d => x(d.year))
  .y0(yTemp(0))
  .y1(d => yTemp(Math.max(0, d.temperature_anomaly)))  // Clamp to 0 minimum
  .defined(d => d.temperature_anomaly != null);

chartGroup.append("path")
  .datum(timeData)
  .attr("d", areaTemp)
  .attr("fill", "#EF5350")
  .attr("opacity", 0.2);
  
  // CO2 line
  const lineCO2 = d3.line()
    .x(d => x(d.year))
    .y(d => yCO2(d.co2))
    .curve(d3.curveMonotoneX);
  
chartGroup.append("path")
    .datum(timeData.filter(d => d.co2 != null))
    .attr("d", lineCO2)
    .attr("fill", "none")
    .attr("stroke", "#FF6F00")
    .attr("stroke-width", 3);
  
  // Temperature line
  const lineTemp = d3.line()
    .x(d => x(d.year))
    .y(d => yTemp(d.temperature_anomaly))
    .curve(d3.curveMonotoneX);
  
chartGroup.append("path")
    .datum(timeData)
    .attr("d", lineTemp)
    .attr("fill", "none")
    .attr("stroke", "#D32F2F")
    .attr("stroke-width", 3);
  
  // Add dots for recent years to emphasize
chartGroup.selectAll(".temp-dot")
    .data(timeData.filter(d => d.year >= 2010))
    .join("circle")
    .attr("class", "temp-dot")
    .attr("cx", d => x(d.year))
    .attr("cy", d => yTemp(d.temperature_anomaly))
    .attr("r", 3)
    .attr("fill", "#D32F2F")
    .attr("stroke", "white")
    .attr("stroke-width", 1);
  
  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")).ticks(15))
    .call(g => g.select(".domain").attr("stroke", "#999"))
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "11px"));
  
  // Left Y axis (Temperature)
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yTemp).ticks(10))
    .call(g => g.select(".domain").attr("stroke", "#D32F2F").attr("stroke-width", 2))
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "11px")
      .attr("fill", "#D32F2F")
      .attr("font-weight", "600"));
  
  // Right Y axis (CO2)
  svg.append("g")
    .attr("transform", `translate(${width - margin.right},0)`)
    .call(d3.axisRight(yCO2).ticks(10))
    .call(g => g.select(".domain").attr("stroke", "#FF6F00").attr("stroke-width", 2))
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "11px")
      .attr("fill", "#FF6F00")
      .attr("font-weight", "600"));
  
  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#1a1a1a")
    .text("CO₂ Emissions vs Global Temperature Change");
  
  // Subtitle
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 55)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("fill", "#666")
    .text("Tracking the parallel rise of carbon emissions and global warming");
  
  // X axis label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .text("Year");
  
  // Left Y axis label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(margin.top + height - margin.bottom) / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .attr("fill", "#D32F2F")
    .text("Temperature Anomaly (°C)");
  
  // Right Y axis label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(margin.top + height - margin.bottom) / 2)
    .attr("y", width - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .attr("fill", "#FF6F00")
    .text("Global CO₂ Emissions (Million Tonnes)");
  
  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${margin.left + 20}, ${margin.top + 20})`);
  
  legend.append("line")
    .attr("x1", 0)
    .attr("x2", 40)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("stroke", "#D32F2F")
    .attr("stroke-width", 3);
  
  legend.append("text")
    .attr("x", 50)
    .attr("y", 0)
    .attr("dy", "0.35em")
    .attr("font-size", "12px")
    .attr("font-weight", "600")
    .text("Temperature Anomaly");
  
  legend.append("line")
    .attr("x1", 0)
    .attr("x2", 40)
    .attr("y1", 25)
    .attr("y2", 25)
    .attr("stroke", "#FF6F00")
    .attr("stroke-width", 3);
  
  legend.append("text")
    .attr("x", 50)
    .attr("y", 25)
    .attr("dy", "0.35em")
    .attr("font-size", "12px")
    .attr("font-weight", "600")
    .text("CO₂ Emissions");
  
  // Calculate correlation
  const validData = timeData.filter(d => d.co2 != null && d.temperature_anomaly != null);
  const n = validData.length;
  const sumX = d3.sum(validData, d => d.co2);
  const sumY = d3.sum(validData, d => d.temperature_anomaly);
  const sumXY = d3.sum(validData, d => d.co2 * d.temperature_anomaly);
  const sumX2 = d3.sum(validData, d => d.co2 * d.co2);
  const sumY2 = d3.sum(validData, d => d.temperature_anomaly * d.temperature_anomaly);
  
  const correlation = (n * sumXY - sumX * sumY) / 
    Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
  
  // Stats box
  const statsBox = svg.append("g")
    .attr("transform", `translate(${width - margin.right - 500}, ${margin.top + 20})`);
  
  statsBox.append("rect")
    .attr("width", 230)
    .attr("height", 200)
    .attr("fill", "#fff9e6")
    .attr("stroke", "#FF9800")
    .attr("stroke-width", 2)
    .attr("rx", 8);
  
  statsBox.append("text")
    .attr("x", 115)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "700")
    .attr("fill", "#E65100")
    .text("CORRELATION ANALYSIS");
  
  // Correlation coefficient
  statsBox.append("text")
    .attr("x", 15)
    .attr("y", 55)
    .attr("font-size", "11px")
    .attr("fill", "#666")
    .text("Correlation coefficient:");
  
  statsBox.append("text")
    .attr("x", 115)
    .attr("y", 78)
    .attr("text-anchor", "middle")
    .attr("font-size", "28px")
    .attr("font-weight", "bold")
    .attr("fill", "#D32F2F")
    .text(correlation.toFixed(3));
  
  statsBox.append("text")
    .attr("x", 115)
    .attr("y", 100)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("fill", "#666")
    .text("(r = 1.0 is perfect correlation)");
  
  // Recent stats
  const recentData = timeData.filter(d => d.year >= 2000);
  const recentTempChange = recentData[recentData.length - 1].temperature_anomaly - recentData[0].temperature_anomaly;
  const recentCO2Change = recentData[recentData.length - 1].co2 - recentData[0].co2;
  
  statsBox.append("text")
    .attr("x", 15)
    .attr("y", 125)
    .attr("font-size", "10px")
    .attr("fill", "#666")
    .text("Since 2000:");
  
  statsBox.append("text")
    .attr("x", 15)
    .attr("y", 143)
    .attr("font-size", "11px")
    .attr("fill", "#D32F2F")
    .attr("font-weight", "600")
    .text(`Temp: +${recentTempChange.toFixed(2)}°C`);
  
  statsBox.append("text")
    .attr("x", 15)
    .attr("y", 161)
    .attr("font-size", "11px")
    .attr("fill", "#FF6F00")
    .attr("font-weight", "600")
    .text(`CO₂: +${(recentCO2Change / 1000).toFixed(1)}B tonnes`);
  
  // Add annotation for key periods
  const annotations = [
    {year: 1950, label: "Post-WWII\nIndustrialization", tempOffset: -0.3},
    {year: 2000, label: "21st Century\nAcceleration", tempOffset: 0.3}
  ];
  
  annotations.forEach(ann => {
    const dataPoint = timeData.find(d => d.year === ann.year);
    if (dataPoint) {
      svg.append("line")
        .attr("x1", x(ann.year))
        .attr("x2", x(ann.year))
        .attr("y1", yTemp(dataPoint.temperature_anomaly))
        .attr("y2", yTemp(dataPoint.temperature_anomaly) + (ann.tempOffset > 0 ? -70 : 70))
        .attr("stroke", "#666")
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "3,3");
      
      svg.append("text")
        .attr("x", x(ann.year))
        .attr("y", yTemp(dataPoint.temperature_anomaly) + (ann.tempOffset > 0 ? -80 : 80))
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("fill", "#555")
        .selectAll("tspan")
        .data(ann.label.split("\n"))
        .join("tspan")
        .attr("x", x(ann.year))
        .attr("dy", (d, i) => i === 0 ? 0 : 12)
        .text(d => d);
    }
  });
  
  // Interactive tooltip
  const tooltip = svg.append("g")
    .attr("pointer-events", "none")
    .style("display", "none");
  
  tooltip.append("rect")
    .attr("width", 200)
    .attr("height", 90)
    .attr("fill", "white")
    .attr("stroke", "#333")
    .attr("stroke-width", 2)
    .attr("rx", 6)
    .attr("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.2))");
  
  const tooltipText = tooltip.append("text");
  
  // Create invisible overlay for mouse tracking
  svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mousemove", function(event) {
      const [mx] = d3.pointer(event);
      const year = Math.round(x.invert(mx));
      const dataPoint = timeData.find(d => d.year === year);
      
      if (dataPoint) {
        tooltip.style("display", null);
        
        let tooltipX = x(year) + 15;
        let tooltipY = yTemp(dataPoint.temperature_anomaly) - 50;
        
        if (tooltipX > width - 220) tooltipX = x(year) - 215;
        if (tooltipY < margin.top) tooltipY = margin.top + 10;
        
        tooltip.attr("transform", `translate(${tooltipX},${tooltipY})`);
        
        tooltipText.selectAll("*").remove();
        
        tooltipText.append("tspan")
          .attr("x", 15)
          .attr("y", 25)
          .attr("font-weight", "bold")
          .attr("font-size", "14px")
          .text(`Year: ${year}`);
        
        tooltipText.append("tspan")
          .attr("x", 15)
          .attr("y", 48)
          .attr("font-size", "11px")
          .attr("fill", "#D32F2F")
          .attr("font-weight", "600")
          .text(`Temp: ${dataPoint.temperature_anomaly.toFixed(2)}°C`);
        
        if (dataPoint.co2) {
          tooltipText.append("tspan")
            .attr("x", 15)
            .attr("y", 68)
            .attr("font-size", "11px")
            .attr("fill", "#FF6F00")
            .attr("font-weight", "600")
            .text(`CO₂: ${(dataPoint.co2 / 1000).toFixed(1)}B tonnes`);
        }
      }
    })
    .on("mouseout", function() {
      tooltip.style("display", "none");
    });
  
  return svg.node();
}


function _9(html){return(
html`
<style>
  /* All necessary styles */
  
  .chapter-divider {
    background: linear-gradient(to right, #667eea, #764ba2);
    height: 4px;
    margin: 80px 0 60px 0;
    border-radius: 2px;
  }
  
  .part-header {
    text-align: left;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border-radius: 15px;
  }
  
  .part-number {
    font-size: 1em;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
  }
  
  .part-title {
    font-size: 3em;
    font-weight: 900;
    color: #2c3e50;
    margin: 10px 0 20px 0;
    line-height: 1.2;
  }
  
  .part-description {
    text-align: left;
    font-size: 1.3em;
    color: #5a6c7d;
    font-style: italic;
    max-width: 700px;
    margin: 0;
  }
  
  .chapter-header {
    text-align: left;
    margin-bottom: 50px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .chapter-number {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  
  .chapter-title {
    font-size: 2.5em;
    font-weight: 800;
    color: #2c3e50;
    margin: 10px 0;
    line-height: 1.2;
  }
  
  .chapter-subtitle {
    font-size: 1.2em;
    font-style: italic;
    color: #7f8c8d;
    font-weight: 400;
    margin-top: 15px;
  }
  
  .intro-box {
    max-width: 900px;
    margin: 0 auto 40px auto;
    background: #fff5f5;
    padding: 18px 25px;
    border-radius: 12px;
    border-left: 5px solid #e74c3c;
  }
  
  .intro-text {
    font-size: 1.1em;
    line-height: 1.7;
    color: #2c3e50;
    margin: 0;
  }
  
  .periods-grid {
    max-width: 1100px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .period-card {
    background: white;
    padding: 15px 20px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .period-card:hover {
    transform: translateY(-3px);
  }
  
  .period-name {
    font-size: 0.8em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .period-rate {
    font-size: 1.3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 5px;
  }
  
  .period-note {
    font-size: 0.75em;
    color: #5a6c7d;
    line-height: 1.3;
  }
  
  .viz-intro {
    text-align: center;
    max-width: 900px;
    margin: 40px auto 30px auto;
    padding: 18px 25px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 12px;
    font-size: 0.95em;
    color: #1565c0;
    line-height: 1.5;
    font-weight: 500;
  }
  
  .insight-box {
    background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
    padding: 30px 40px;
    border-radius: 15px;
    margin: 50px auto;
    max-width: 1000px;
    box-shadow: 0 5px 20px rgba(253, 203, 110, 0.3);
  }
  
  .insight-title {
    font-size: 1.4em;
    font-weight: 700;
    color: #2d3436;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .insight-content {
    font-size: 1.0em;
    color: #2d3436;
    line-height: 1.7;
  }
  
  .insight-list {
    margin: 15px 0 0 0;
    padding-left: 0;
    list-style: none;
  }
  
  .insight-list li {
    padding: 10px 0 10px 30px;
    position: relative;
    line-height: 1.6;
  }
  
  .insight-list li:before {
    content: "→";
    position: absolute;
    left: 5px;
    font-weight: 700;
    color: #d63031;
    font-size: 1.2em;
  }
  
  .highlight-stat {
    background: linear-gradient(120deg, #fdcb6e 0%, #ffeaa7 100%);
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: #2d3436;
  }
  
  .callout-box {
    background: #fff3cd;
    border-left: 5px solid #ff9800;
    padding: 20px 25px;
    border-radius: 8px;
    margin: 40px auto;
    max-width: 1000px;
  }
  
  .callout-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #e65100;
    margin: 0 0 12px 0;
  }
  
  .callout-text {
    font-size: 1.0em;
    color: #856404;
    line-height: 1.7;
    margin: 0;
  }
  
  .bridge-section {
    max-width: 1000px;
    margin: 70px auto;
    padding: 30px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
    border: 3px solid #667eea;
  }
  
  .bridge-question {
    font-size: 1.6em;
    font-weight: 700;
    color: #2c3e50;
    text-align: left;
    margin: 0 0 25px 0;
    line-height: 1.4;
  }
  
  .bridge-answer {
    font-size: 1.15em;
    color: #34495e;
    text-align: left;
    line-height: 1.7;
    font-style: italic;
    margin: 0;
  }
</style>

<!-- KEY FINDINGS FROM QUESTION C -->
<div class="insight-box">
  <div class="insight-title">
    <span>💡</span> Key Findings: The CO₂-Temperature Link
  </div>
  <div class="insight-content">
    <ul class="insight-list">
      <li><strong>Nearly perfect correlation:</strong> <span class="highlight-stat">r = 0.933</span> (93% of temperature changes tracked with CO₂)</li>
      <li><strong>Three-phase pattern:</strong> Both low pre 1940 → gradual rise 1940-1970 → explosive growth 1970-2023</li>
      <li><strong>Recent acceleration:</strong> Since 2000, temperature +0.78°C and CO₂ +12.38 billion tonnes</li>
      <li><strong>Cause and effect:</strong> CO₂ increases before or with temperature (never after), physics confirms CO₂ traps heat</li>
      <li><strong>Parallel trajectories:</strong> Both accelerated 6-7x faster in 2000-2023 vs 1880-1940</li>
      <li><strong>All 10 hottest years:</strong> Occurred since 2010, matching highest CO₂ levels ever recorded</li>
    </ul>
  </div>
</div>

<!-- CALLOUT: THE LAG EFFECT -->
<div class="callout-box">
  <div class="callout-title">⏰ The Time Bomb</div>
  <p class="callout-text">
  The chart reveals a chilling lag: CO₂ emissions cause warming that <strong>peaks 30 years later</strong> 
    due to ocean thermal inertia. This means the warming we experience today was locked in by emissions 
    from <strong>the mid-1990s</strong>. Even if we stopped all emissions tomorrow, temperatures would 
    continue rising for <strong>three more decades</strong>. The CO₂ we emit today determines the climate 
    our children will inherit <strong>in the 2050s</strong>. We're cooking the future right now.
  </p>
</div>

<!-- TRANSITION BRIDGE -->
<div class="bridge-section">
  <div class="bridge-question">The Evidence is Clear. Now What?</div>
  <p class="bridge-answer">
    We've proven the problem: Earth is warming, and CO₂ is the driver. 
    But are we actually <em>doing</em> anything about it? It's time to examine the solution <strong> renewable energy</strong>.
  </p>
</div>

<!-- CHAPTER DIVIDER -->
<div class="chapter-divider"></div>

<!-- PART 3 HEADER -->
<div class="part-header">
  <div class="part-number">Part 3: The Energy Transition</div>
  <h1 class="part-title">Racing Toward Solutions</h1>
  <p class="part-description">Tracking the global shift to clean energy</p>
</div>

<!-- QUESTION D HEADER -->
<div class="chapter-header">
  <h2 class="chapter-title">Who's Leading the Change?</h2>
  <p class="chapter-subtitle">Which countries have increased renewables in the last decade?</p>
</div>

<div class="intro-box">
  <p class="intro-text">
    With the CO₂-temperature link proven, we turn to solutions. We compare renewable energy adoption across 72 countries to identify leaders, laggards, and surprising success stories in the clean energy transition.
  </p>
</div>

<div class="periods-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
  <div class="period-card" style="border-left-color: #4caf50;">
    <div class="period-name" style="color: #4caf50;">Winners</div>
    <div class="period-rate" style="color: #4caf50;">61 countries</div>
    <div class="period-note">Increased renewables</div>
  </div>
  
  <div class="period-card" style="border-left-color: #e74c3c;">
    <div class="period-name" style="color: #e74c3c;">Losers</div>
    <div class="period-rate" style="color: #e74c3c;">11 countries</div>
    <div class="period-note">Decreased renewables</div>
  </div>
  
  <div class="period-card" style="border-left-color: #ff9800;">
    <div class="period-name" style="color: #ff9800;">Top Performer</div>
    <div class="period-rate" style="color: #ff9800;">Ecuador</div>
    <div class="period-note">+87% growth rate</div>
  </div>
  
  <div class="period-card">
    <div class="period-name">Analysis Period</div>
    <div class="period-rate">2011-2021</div>
    <div class="period-note">7-year comparison</div>
  </div>
</div>
`
)}

async function _10(FileAttachment,d3)
{
  // Load the changes data
  const data = await FileAttachment("Question_D_Changes_Data.csv").csv({typed: true});
  
  // Filter to countries with significant changes (positive or interesting negative)
  // Get top 15 positive changes and top 5 negative for context
  const sortedData = data
    .filter(d => d.Absolute_Change != null)
    .sort((a, b) => b.Absolute_Change - a.Absolute_Change);
  
  const topGainers = sortedData.slice(0, 15);
  const topLosers = sortedData.slice(-5);
  const displayData = [...topGainers, ...topLosers];
  
  // Dimensions
  const width = 1100;
  const height = 800;
  const margin = {top: 130, right: 150, bottom: 80, left: 180};
  
  // Create SVG
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#ffffff");
  
  // Scales
  const x = d3.scaleLinear()
    .domain([
      Math.min(-5, d3.min(displayData, d => d.Absolute_Change)),
      d3.max(displayData, d => d.Absolute_Change) + 5
    ])
    .range([margin.left, width - margin.right]);
  
  const y = d3.scaleBand()
    .domain(displayData.map(d => d.Entity))
    .range([margin.top, height - margin.bottom])
    .padding(0.2);
  
  // Color scale based on change magnitude
  const colorScale = d3.scaleLinear()
    .domain([0, 15, 30])
    .range(["#FFF59D", "#66BB6A", "#2E7D32"])
    .clamp(true);

  // Red scale for negative changes
const negativeColorScale = d3.scaleLinear()
  .domain([-5, -2, 0])  // -5% to 0%
  .range(["#C62828", "#EF5350", "#FFCDD2"])  // Dark red → Light red
  .clamp(true);
  
  const negativeColor = "#EF5350";
  
  // Add background shading for positive/negative zones
  svg.append("rect")
    .attr("x", x(0))
    .attr("y", margin.top)
    .attr("width", x(x.domain()[1]) - x(0))
    .attr("height", height - margin.top - margin.bottom)
    .attr("fill", "#E8F5E9")
    .attr("opacity", 0.3);
  
  if (x.domain()[0] < 0) {
    svg.append("rect")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", x(0) - margin.left)
      .attr("height", height - margin.top - margin.bottom)
      .attr("fill", "#FFEBEE")
      .attr("opacity", 0.3);
  }
  
  // Grid lines
  svg.append("g")
    .selectAll("line")
    .data(x.ticks(10))
    .join("line")
    .attr("x1", d => x(d))
    .attr("x2", d => x(d))
    .attr("y1", margin.top)
    .attr("y2", height - margin.bottom)
    .attr("stroke", "#e0e0e0")
    .attr("stroke-width", 1);
  
  // Zero reference line
  svg.append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", margin.top)
    .attr("y2", height - margin.bottom)
    .attr("stroke", "#333")
    .attr("stroke-width", 2);
  
  // Create bars
  const bars = svg.selectAll(".bar")
    .data(displayData)
    .join("g")
    .attr("class", "bar");
  
  bars.append("rect")
    .attr("x", d => d.Absolute_Change >= 0 ? x(0) : x(d.Absolute_Change))
    .attr("y", d => y(d.Entity))
    .attr("width", d => Math.abs(x(d.Absolute_Change) - x(0)))
    .attr("height", y.bandwidth())
    .attr("fill", d => d.Absolute_Change >= 0 ? colorScale(d.Absolute_Change) : negativeColorScale(d.Absolute_Change))
    .attr("stroke", d => d.Absolute_Change >= 0 ? "#388E3C" : "#C62828")
    .attr("stroke-width", 1.5)
    .attr("rx", 3);
  
  // Value labels on bars
  bars.append("text")
    .attr("x", d => d.Absolute_Change >= 0 ? x(d.Absolute_Change) + 5 : x(d.Absolute_Change) - 5)
    .attr("y", d => y(d.Entity) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", d => d.Absolute_Change >= 0 ? "start" : "end")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", "#333")
    .text(d => `${d.Absolute_Change > 0 ? '+' : ''}${d.Absolute_Change.toFixed(1)}%`);
  
  // 2021 values on right
  bars.append("text")
    .attr("x", width - margin.right + 10)
    .attr("y", d => y(d.Entity) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("font-size", "10px")
    .attr("fill", "#666")
    .text(d => `${d['2021'].toFixed(1)}%`);
  
  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(10))
    .call(g => g.select(".domain").attr("stroke", "#999"))
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "11px"));
  
  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").remove())
    .call(g => g.selectAll(".tick text")
      .attr("font-size", "12px")
      .attr("font-weight", d => {
        const country = displayData.find(c => c.Entity === d);
        return country && country.Absolute_Change > 20 ? "700" : "400";
      })
      .attr("fill", d => {
        const country = displayData.find(c => c.Entity === d);
        return country && country.Absolute_Change > 20 ? "#2E7D32" : "#333";
      }));
  
  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#1a1a1a")
    .text("Renewable Energy Progress");
  
  // Subtitle
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 55)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("fill", "#666")
    .text("Change in renewable energy share (% of total primary energy)");
  
  // X axis label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "600")
    .text("Absolute Change in Renewable % (2011 to 2021)");
  
  // Right side label
  svg.append("text")
    .attr("x", width - margin.right + 50)
    .attr("y", margin.top - 10)
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", "#666")
    .text("2021 Level");
  
  // GRADIENT LEGEND - Shows color scale meaning
const legend = svg.append("g")
  .attr("transform", `translate(${margin.left + 20}, ${margin.top - 50})`);

// Create gradient definition
const gradientDef = svg.append("defs")
  .append("linearGradient")
  .attr("id", "progress-gradient")
  .attr("x1", "0%")
  .attr("x2", "100%");

gradientDef.append("stop")
  .attr("offset", "0%")
  .attr("stop-color", "#FFF59D");

gradientDef.append("stop")
  .attr("offset", "50%")
  .attr("stop-color", "#66BB6A");

gradientDef.append("stop")
  .attr("offset", "100%")
  .attr("stop-color", "#2E7D32");

// Draw gradient bar for positive changes
legend.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 200)
  .attr("height", 20)
  .attr("fill", "url(#progress-gradient)")
  .attr("stroke", "#388E3C")
  .attr("stroke-width", 1.5)
  .attr("rx", 3);

// Add scale labels
legend.append("text")
  .attr("x", 0)
  .attr("y", 35)
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text("0%");

legend.append("text")
  .attr("x", 100)
  .attr("y", 35)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text("15%");

legend.append("text")
  .attr("x", 200)
  .attr("y", 35)
  .attr("text-anchor", "end")
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text("30%+");

// Title for gradient
legend.append("text")
  .attr("x", 100)
  .attr("y", -5)
  .attr("text-anchor", "middle")
  .attr("font-size", "11px")
  .attr("font-weight", "600")
  .attr("fill", "#333")
  .text("Increase in Renewable Energy Share");

// Negative change gradient (separate)
const negGradientDef = svg.append("defs")
  .append("linearGradient")
  .attr("id", "negative-gradient")
  .attr("x1", "0%")
  .attr("x2", "100%");

negGradientDef.append("stop")
  .attr("offset", "0%")
  .attr("stop-color", "#C62828");  // Dark red

negGradientDef.append("stop")
  .attr("offset", "50%")
  .attr("stop-color", "#EF5350");  // Medium red

negGradientDef.append("stop")
  .attr("offset", "100%")
  .attr("stop-color", "#FFCDD2");  // Light red

// Draw gradient bar for negative changes
legend.append("rect")
  .attr("x", 230)
  .attr("y", 0)
  .attr("width", 100)
  .attr("height", 20)
  .attr("fill", "url(#negative-gradient)")
  .attr("stroke", "#C62828")
  .attr("stroke-width", 1.5)
  .attr("rx", 3);

// Labels for negative gradient
legend.append("text")
  .attr("x", 230)
  .attr("y", 35)
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text("-5%");

legend.append("text")
  .attr("x", 330)
  .attr("y", 35)
  .attr("text-anchor", "end")
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text("0%");

legend.append("text")
  .attr("x", 280)
  .attr("y", -5)
  .attr("text-anchor", "middle")
  .attr("font-size", "11px")
  .attr("font-weight", "600")
  .attr("fill", "#333")
  .text("Decrease");

  
  // Stats box
  const statsBox = svg.append("g")
    .attr("transform", `translate(${width - margin.right - 220}, ${height - 250})`);
  
  statsBox.append("rect")
    .attr("width", 200)
    .attr("height", 140)
    .attr("fill", "#E8F5E9")
    .attr("stroke", "#66BB6A")
    .attr("stroke-width", 2)
    .attr("rx", 6);
  
  statsBox.append("text")
    .attr("x", 100)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "700")
    .attr("fill", "#2E7D32")
    .text("KEY FINDINGS");
  
  const topCountry = topGainers[0];
  const avgIncrease = d3.mean(topGainers, d => d.Absolute_Change);
  const countriesIncreased = displayData.filter(d => d.Absolute_Change > 0).length;
  
  const stats = [
    {label: "Top performer:", value: topCountry.Entity.substring(0, 12)},
    {label: "Increase:", value: `+${topCountry.Absolute_Change.toFixed(1)}%`},
    {label: "Avg of top 15:", value: `+${avgIncrease.toFixed(1)}%`},
    {label: "Progressing:", value: `${countriesIncreased}/${displayData.length}`}
  ];
  
  stats.forEach((stat, i) => {
    statsBox.append("text")
      .attr("x", 15)
      .attr("y", 50 + i * 22)
      .attr("font-size", "10px")
      .attr("fill", "#555")
      .text(stat.label);
    
    statsBox.append("text")
      .attr("x", 105)
      .attr("y", 50 + i * 22)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#2E7D32")
      .text(stat.value);
  });
  
  // Interactive tooltips
  const tooltip = svg.append("g")
    .attr("pointer-events", "none")
    .style("display", "none");
  
  tooltip.append("rect")
    .attr("width", 260)
    .attr("height", 140)
    .attr("fill", "white")
    .attr("stroke", "#333")
    .attr("stroke-width", 2)
    .attr("rx", 6)
    .attr("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.2))");
  
  const tooltipText = tooltip.append("text");
  
  bars
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      d3.select(this).select("rect").attr("opacity", 0.7);
      
      tooltip.style("display", null);
      
      let tooltipX = x(d.Absolute_Change) + 20;
      let tooltipY = y(d.Entity);
      
      if (tooltipX > width - 280) tooltipX = x(d.Absolute_Change) - 270;
      if (tooltipY > height - 160) tooltipY = height - 160;
      
      tooltip.attr("transform", `translate(${tooltipX},${tooltipY})`);
      
      tooltipText.selectAll("*").remove();
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 25)
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text(d.Entity);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 50)
        .attr("font-size", "11px")
        .attr("fill", "#666")
        .text(`2011: ${d['2014'].toFixed(1)}% renewable`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 70)
        .attr("font-size", "11px")
        .attr("fill", "#666")
        .text(`2021: ${d['2021'].toFixed(1)}% renewable`);
      
      tooltipText.append("tspan")
        .attr("x", 15)
        .attr("y", 95)
        .attr("font-size", "13px")
        .attr("font-weight", "bold")
        .attr("fill", d.Absolute_Change >= 0 ? "#2E7D32" : "#C62828")
        .text(`Change: ${d.Absolute_Change > 0 ? '+' : ''}${d.Absolute_Change.toFixed(1)}%`);
      
      if (d.Primary_Driver) {
        tooltipText.append("tspan")
          .attr("x", 15)
          .attr("y", 118)
          .attr("font-size", "10px")
          .attr("fill", "#888")
          .text(`Driver: ${d.Primary_Driver}`);
      }
    })
    .on("mouseout", function() {
      d3.select(this).select("rect").attr("opacity", 1);
      tooltip.style("display", "none");
    });
  
  return svg.node();
}


function _11(html){return(
html`
<style>
  /* All necessary styles */
  
  .insight-box-green {
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
    padding: 30px 40px;
    border-radius: 15px;
    margin: 50px auto;
    max-width: 1000px;
    box-shadow: 0 5px 20px rgba(76, 175, 80, 0.2);
  }
  
  .insight-title-green {
    font-size: 1.4em;
    font-weight: 700;
    color: #1b5e20;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .insight-content-green {
    font-size: 1.0em;
    color: #1b5e20;
    line-height: 1.7;
  }
  
  .insight-list {
    margin: 15px 0 0 0;
    padding-left: 0;
    list-style: none;
  }
  
  .insight-list li {
    padding: 10px 0 10px 30px;
    position: relative;
    line-height: 1.6;
  }
  
  .insight-list li:before {
    content: "→";
    position: absolute;
    left: 5px;
    font-weight: 700;
    color: #2e7d32;
    font-size: 1.2em;
  }
  
  .highlight-stat {
    background: linear-gradient(120deg, #fdcb6e 0%, #ffeaa7 100%);
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: #2d3436;
  }
  
  .success-grid {
    max-width: 1000px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .success-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    border-left: 5px solid #4caf50;
    box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  }
  
  .success-country {
    font-size: 1.3em;
    font-weight: 800;
    color: #2e7d32;
    margin-bottom: 12px;
  }
  
  .success-stat {
    font-size: 1.1em;
    color: #424242;
    margin-bottom: 8px;
  }
  
  .success-label {
    font-size: 0.9em;
    color: #757575;
  }
  
  .callout-box {
    background: #fff3cd;
    border-left: 5px solid #ff9800;
    padding: 20px 25px;
    border-radius: 8px;
    margin: 40px auto;
    max-width: 1000px;
  }
  
  .callout-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #e65100;
    margin: 0 0 12px 0;
  }
  
  .callout-text {
    font-size: 1.0em;
    color: #856404;
    line-height: 1.7;
    margin: 0;
  }
  
  .conclusion-section {
    max-width: 1000px;
    margin: 80px auto;
    padding: 50px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
  }
  
  .conclusion-title {
    font-size: 2.5em;
    font-weight: 900;
    text-align: center;
    margin: 0 0 30px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  
  .conclusion-text {
    font-size: 1.2em;
    line-height: 1.9;
    margin-bottom: 25px;
    text-align: center;
  }
  
  .truths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }
  
  .truth-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.3);
  }
  
  .truth-number {
    font-size: 2.5em;
    font-weight: 900;
    color: #ffd700;
    margin-bottom: 10px;
  }
  
  .truth-title {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 12px;
  }
  
  .truth-text {
    font-size: 1.0em;
    line-height: 1.6;
    opacity: 0.95;
  }
  
  .final-message {
    background: rgba(255,255,255,0.2);
    padding: 30px;
    border-radius: 15px;
    margin-top: 40px;
    text-align: center;
    border: 2px solid rgba(255,255,255,0.4);
  }
  
  .final-message p {
    font-size: 1.3em;
    line-height: 1.8;
    margin: 0;
    font-weight: 500;
    font-style: italic;
  }
  
  .team-section {
    max-width: 1000px;
    margin: 60px auto 40px auto;
    padding: 40px;
    background: #f8f9fa;
    border-radius: 15px;
  }
  
  .team-title {
    font-size: 2em;
    font-weight: 700;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .team-member {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .member-name {
    font-size: 1.2em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
  }
  
  .member-role {
    font-size: 0.95em;
    color: #5a6c7d;
    line-height: 1.5;
  }
</style>

<!-- KEY FINDINGS FROM QUESTION D -->
<div class="insight-box-green">
  <div class="insight-title-green">
     Key Findings: Progress on Renewable Adoption
  </div>
  <div class="insight-content-green">
    <ul class="insight-list" style="color: #1b5e20;">
      <li><strong>Majority progressing:</strong> <span class="highlight-stat">61 out of 72 countries</span> (85%) increased renewable energy share</li>
      <li><strong>Top performer:</strong> Ecuador led with <span class="highlight-stat">+15.1%</span> absolute increase (87% growth rate)</li>
      <li><strong>Nordic excellence:</strong> Denmark (+14.6%), Sweden (+10.3%), Finland (+9.9%) show sustained leadership</li>
      <li><strong>Top 15 average:</strong> Countries increased renewables by <span class="highlight-stat">+8.8%</span> on average</li>
      <li><strong>But 11 backsliders:</strong> Philippines (-2.1%), Italy (-1.4%), Pakistan (-0.9%) moved backward</li>
    </ul>
  </div>
</div>

<!-- SUCCESS STORIES HIGHLIGHT -->
<div class="success-grid">
  <div class="success-card">
    <div class="success-country">🇪🇨 Ecuador</div>
    <div class="success-stat">2011: 16.9% → 2021: 32.4%</div>
    <div class="success-label">Hydropower expansion</div>
  </div>
  
  <div class="success-card">
    <div class="success-country">🇩🇰 Denmark</div>
    <div class="success-stat">2011: 24.6% → 2021: 39.2%</div>
    <div class="success-label">Wind power leader</div>
  </div>
  
  <div class="success-card">
    <div class="success-country">🇸🇪 Sweden</div>
    <div class="success-stat">2011: 40.6% → 2021: 50.9%</div>
    <div class="success-label">Crossed 50% milestone</div>
  </div>
</div>
`
)}

function _12(html){return(
html`
<style>
  /* All necessary styles */
  
  .insight-box-green {
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
    padding: 30px 40px;
    border-radius: 15px;
    margin: 50px auto;
    max-width: 1000px;
    box-shadow: 0 5px 20px rgba(76, 175, 80, 0.2);
  }
  
  .insight-title-green {
    font-size: 1.4em;
    font-weight: 700;
    color: #1b5e20;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .insight-content-green {
    font-size: 1.0em;
    color: #1b5e20;
    line-height: 1.7;
  }
  
  .insight-list {
    margin: 15px 0 0 0;
    padding-left: 0;
    list-style: none;
  }
  
  .insight-list li {
    padding: 10px 0 10px 30px;
    position: relative;
    line-height: 1.6;
  }
  
  .insight-list li:before {
    content: "→";
    position: absolute;
    left: 5px;
    font-weight: 700;
    color: #2e7d32;
    font-size: 1.2em;
  }
  
  .highlight-stat {
    background: linear-gradient(120deg, #fdcb6e 0%, #ffeaa7 100%);
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: #2d3436;
  }
  
  .success-grid {
    max-width: 1000px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .success-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    border-left: 5px solid #4caf50;
    box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  }
  
  .success-country {
    font-size: 1.3em;
    font-weight: 800;
    color: #2e7d32;
    margin-bottom: 12px;
  }
  
  .success-stat {
    font-size: 1.1em;
    color: #424242;
    margin-bottom: 8px;
  }
  
  .success-label {
    font-size: 0.9em;
    color: #757575;
  }
  
  .callout-box {
    background: #fff3cd;
    border-left: 5px solid #ff9800;
    padding: 20px 25px;
    border-radius: 8px;
    margin: 40px auto;
    max-width: 1000px;
  }
  
  .callout-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #e65100;
    margin: 0 0 12px 0;
  }
  
  .callout-text {
    font-size: 1.0em;
    color: #856404;
    line-height: 1.7;
    margin: 0;
  }
  
  .conclusion-section {
    max-width: 1000px;
    margin: 80px auto;
    padding: 50px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
  }
  
  .conclusion-title {
    font-size: 2.5em;
    font-weight: 900;
    text-align: center;
    margin: 0 0 30px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  
  .conclusion-text {
    font-size: 1.2em;
    line-height: 1.9;
    margin-bottom: 25px;
    text-align: center;
    display :inline;
  }
  
  .truths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }
  
  .truth-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.3);
  }
  
  .truth-number {
    font-size: 2.5em;
    font-weight: 900;
    color: #ffd700;
    margin-bottom: 10px;
  }
  
  .truth-title {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 12px;
  }
  
  .truth-text {
    font-size: 1.0em;
    line-height: 1.6;
    opacity: 0.95;
  }
  
  .final-message {
    background: rgba(255,255,255,0.2);
    padding: 30px;
    border-radius: 15px;
    margin-top: 40px;
    text-align: center;
    border: 2px solid rgba(255,255,255,0.4);
  }
  
  .final-message p {
    font-size: 1.3em;
    line-height: 1.8;
    margin: 0;
    font-weight: 500;
    font-style: italic;
    display :inline;
  }
  
  .team-section {
    max-width: 1000px;
    margin: 60px auto 40px auto;
    padding: 40px;
    background: #f8f9fa;
    border-radius: 15px;
  }
  
  .team-title {
    font-size: 2em;
    font-weight: 700;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .team-member {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .member-name {
    font-size: 1.2em;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 8px;
  }
  
  .member-role {
    font-size: 0.95em;
    color: #5a6c7d;
    line-height: 1.5;
  }
</style>

<!-- CONCLUSION SECTION -->
<div class="conclusion-section">
  <h2 class="conclusion-title"> What the Data Tells Us</h2>
  
  <p class="conclusion-text">
    After analyzing 145 years of temperature records, countries and their warming patterns, CO₂ emissions, and renewable energy adoption  across, three truths become impossible to ignore.
  </p>
  
  <div class="truths-grid">
    <div class="truth-card">
      <div class="truth-number">1</div>
      <div class="truth-title">We're Out of Time</div>
      <div class="truth-text">
        The planet is warming at 0.26°C per decade, the fastest rate in recorded history. 
        Arctic is warming 3x faster.Because of the 15-20 year lag means more warming is already "locked in." 
        At current trends, the world is likely to temporarily cross 1.5°C by 2026, with persistent long-term crossing expected in the 2030s.
      </div>
    </div>
    
    <div class="truth-card">
      <div class="truth-number">2</div>
      <div class="truth-title">The Solution Exists</div>
      <div class="truth-text">
        85% of countries have increased their renewable share. Nations like Ecuador, Denmark, and Sweden have transformed their energy systems within a single decade proving that rapid transition is possible. 
      </div>
    </div>
    
    <div class="truth-card">
      <div class="truth-number">3</div>
      <div class="truth-title">It's Not Fast Enough</div>
      <div class="truth-text">
        To meet climate goals, the world needs 7–10% annual growth in renewables.
Today we are growing at 4.3%, and the gap between transition leaders and laggards is widening.

Every year of delay locks in more long-term warming.
      </div>
    </div>
  </div>
  
  <div class="final-message">
    <p>
      The data shows a race between two exponential curves: CO₂ accumulation and renewable adoption. 
      Which one wins depends on the choices made in the next decade. 
      The Arctic will continue warming at 3x the global rate. The 1.5°C target will likely be breached. 
      Whether we stop at 1.5°C or race toward 2°C depends on how fast we accelerate the energy transition. 
      <strong>The countries profiled here proved it's possible. The question isn't can we it's will we?</strong>
    </p>
  </div>
</div>

<!-- TEAM & METHODOLOGY -->
<div class="team-section">
  <h3 class="team-title">Team Members</h3>
  
  <div class="team-grid">
    <div class="team-member">
      <div class="member-name">Bhavya Sree Matam</div>
      <div class="member-role">bm3792</div>
    </div>
    
    <div class="team-member">
      <div class="member-name">Sriram Madhiyalagan</div>
      <div class="member-role">sm12155</div>
    </div>
    
    <div class="team-member">
      <div class="member-name">Tarik Kassa</div>
      <div class="member-role">tk2766</div>
    </div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 30px; border-top: 2px solid #dee2e6;">
    <p style="text-align: center; color: #5a6c7d; line-height: 1.7; margin: 0;">
      <strong>Methodology:</strong> Statistical analysis performed in Python using pandas, numpy. <br>
      <strong>Visualizations:</strong> created with D3.js in Observable. <br>
      <strong>Code Repository:</strong> Available upon request<br>
      <strong>Dashboard:</strong> <a href="https://observablehq.com/d/260652d7d5d714f0" target="_blank" style="color: #667eea;">Observablehq.com/d/260652d7d5d714f0</a>
    </p>
  </div>
</div>
`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Question_A_Temperature_Data.csv", {url: new URL("./files/d09f1bcbf3a6646d72c4400180d43e1e1dada450655fce38fa296be2e8ab0dff5c0af9b7f0d96a14a1645391b6678bb9e5e5478741a458aae010214f421bc957.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Question_C_CO2_Temperature_Correlation.csv", {url: new URL("./files/674476150aa74b1adac51895618cbeb7a2d7c7559815b1d8fd474d09b025526dd42c257336b8d5c06d3124045d0a9c654eb660879fb0bcf41adc6935a1aa811f.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Question_B_Regional_Warming.csv", {url: new URL("./files/12c5c8a3d907e4858de9a02f03175d4734a5b96b399b22baa6523f284b115184bb854ea90299e9edbc182b326142a74adec945535dd9b0eacd8ac90cd09cd929.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Question_D_Changes_Data.csv", {url: new URL("./files/07387235ddcacfec235780651b2329e66f1e1d1730924dd335042ea833cc97901f0db72809406fe3c26c360b2537a78476238341626b3e087ff83ef4a60693b8.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["html"], _1);
  main.variable(observer()).define(["html"], _2);
  main.variable(observer()).define(["html"], _3);
  main.variable(observer()).define(["FileAttachment","d3"], _4);
  main.variable(observer()).define(["html"], _5);
  main.variable(observer()).define(["FileAttachment","d3"], _6);
  main.variable(observer()).define(["html"], _7);
  main.variable(observer()).define(["FileAttachment","d3"], _8);
  main.variable(observer()).define(["html"], _9);
  main.variable(observer()).define(["FileAttachment","d3"], _10);
  main.variable(observer()).define(["html"], _11);
  main.variable(observer()).define(["html"], _12);
  return main;
}
