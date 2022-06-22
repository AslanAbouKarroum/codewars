// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// The solution
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

// The solution 2
function validatePIN (pin) {
    let pin_length = pin.trim().split('').filter(el => el >= 0 && el<=9).length
      return (pin_length == 4 && pin.length == 4) || (pin_length == 6 && pin.length == 6) ? true : false
  }