document.getElementById('payNowBtn').addEventListener('click', function() {
    // Your payment processing logic here
    
    // Create and show custom confirmation
    showConfirmationMessage('Payment Successful!', 'Your transaction has been processed successfully.');
});

function showConfirmationMessage(title, message) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: flex; align-items: center;
        justify-content: center; z-index: 1000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white; padding: 30px; border-radius: 15px;
        text-align: center; max-width: 400px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    `;
    
    content.innerHTML = `
        <h2 style="color: #28a745; margin-bottom: 15px;">${title}</h2>
        <p style="color: #666; margin-bottom: 20px;">${message}</p>
        <button onclick="document.body.removeChild(this.closest('.modal'))" 
                style="background: #28a745; color: white; border: none; padding: 10px 20px; 
                       border-radius: 8px; cursor: pointer;">OK</button>
    `;
    
    modal.className = 'modal';
    modal.appendChild(content);
    document.body.appendChild(modal);
}
