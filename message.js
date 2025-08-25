document.getElementById('payNowBtn').addEventListener('click', function() {
    console.log("Pay Now button clicked");
    logEvent('purchase', {
        value: 111,
        currency: 'USD',
        transactionId: 'web1234',
        items: [{
            item_name: 'webview Item',
            item_id: 'webview item',
            price: 111,
            quantity: 1
        }]
    });
    // Your payment processing logic here
    
    // Create and show custom confirmation
    showConfirmationMessage('Payment Successful!', 'Your transaction has been processed successfully.');
});

function showConfirmationMessage(title, message) {
    console.log("Showing confirmation message:", title, message);

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

    console.log("Confirmation modal appended to DOM");
}

let form_focused = false; // declare once at the top

document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('focus', () => {
    console.log("Form input focused:", input.name || input.id || input.className);
    if (form_focused) {
      console.log("Form already focused before, skipping event log");
      return;
    }

    form_focused = true;
    console.log("Logging add_payment_info event for the first form focus");

    logEvent('add_payment_info', {
      value: 111,
      currency: 'USD',
      transactionId: 'web1234',
      items: [{
        item_name: 'webview Item',
        item_id: 'webview item',
        price: 111,
        quantity: 1
      }]
    });
  });
});

// website message handler
function logEvent(name, params) {
    console.log("Preparing to send event:", name, params || {});
  
    if (!name) {
      console.warn("logEvent called without a name");
      return;
    }

    if (window.AnalyticsWebInterface) {
        console.log("Sending event to Android:", name);
        window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
    } else if (window.webkit
        && window.webkit.messageHandlers
        && window.webkit.messageHandlers.firebase) {
        console.log("Sending event to iOS:", name);
        var message = {
          command: 'logEvent',
          name: name,
          parameters: params
        };
        window.webkit.messageHandlers.firebase.postMessage(message);
    } else {
        console.warn("No native APIs found. Event not forwarded:", name);
    }
}
