
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Dark Mode";
  Object.assign(toggleButton.style, {
    position: "fixed", top: "10px",border_radious:"20px", right: "10px", padding: "10px", zIndex: "9999"
  });
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
