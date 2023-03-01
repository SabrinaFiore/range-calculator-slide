// on fee per hour input
$('#input-fee-per-hour').on('input', function(){
    // update total fee text
    $('#text-fee-per-hour').text(formatNumber(calculateTotalFee()));
  });
  
  // on total hours input
  $('#input-total-hours').on('input', function(){
    // update total fee text
    $('#text-fee-per-hour').text(formatNumber(calculateTotalFee()));
  });
  
  // on total projects input
  $('#input-total-projects').on('input', function(){
    // update project count text
    $('.hack50-project-count').text($(this).val());
    // update total fee text
    $('#text-fee-per-hour').text(formatNumber(calculateTotalFee()));
  });
  
  // calculate total fee
  function calculateTotalFee(){
    // get fee per hour value
    const feePerHr = Number($('#input-fee-per-hour').val());
    // get total hours
    const totalHrs = Number($('#input-total-hours').val());
    // get total number of projects
    const totalProjects = Number($('#input-total-projects').val());
    
    // multiply feePerHr by totalHrs by totalProjects to get total fee
    return feePerHr * totalHrs * totalProjects;
  }
  
  // format number function
  // e.g. 3500 becomes 3,500
  function formatNumber(num){
    return new Intl.NumberFormat().format(num);
  }