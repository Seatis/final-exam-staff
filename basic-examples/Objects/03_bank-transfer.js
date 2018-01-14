'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an amount of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function balance(accNum) {
	if (accNum === 'all') {
		accounts.forEach(function(element) {
			console.log(element.client_name + ": " + element.balance);
		});
	} else {
		let currentAccount = accounts.filter(account => account.account_number === accNum);
		if (currentAccount[0]) {
			console.log(currentAccount[0].client_name + ": " + currentAccount[0].balance);
		} else {
			console.log("404 - account not found");
		}
	}
}

function transfer(fromAccNum, toAccNum, amount) {
	let source = accounts.filter(account => account.account_number === fromAccNum);
	let target = accounts.filter(account => account.account_number === toAccNum);
	if (source[0] && target[0]) {
		accounts[accounts.indexOf(source[0])].balance -= amount;
		accounts[accounts.indexOf(target[0])].balance += amount;
		console.log("The new status:");
		balance('all');
	} else {
		console.log('404 - account not found');
	}
}

balance('Vladimir');
transfer(43546731, 11234543, 5204100071.23);





// let invalidName = true;
	// accounts.forEach(function(element) {
	// 	if (name === element['client_name']) {
	// 		console.log(element['client_name'] + ": " + element['balance']);
	// 		invalidName = false;
	// 	} else if (name == 'all') {
	// 		console.log(element['client_name'] + ": " + element['balance']);
	// 		invalidName = false;
	// 	}
	// });
	// if (invalidName) {
	// 	console.log("Who is " + name + "?");
	// }



	// let sourceFlag = false;
	// let targetFlag = false;
	// accounts.forEach(function(element) {
	// 	if (fromAccNum === element['account_number']) {
	// 		accounts[accounts.indexOf(element)]['balance'] -= amount;
	// 		sourceFlag = true;
	// 	}
	// });
	// accounts.forEach(function(element) {
	// 	if (toAccNum === element['account_number']) {
	// 		accounts[accounts.indexOf(element)]['balance'] += amount;
	// 		targetFlag = true;
	// 	}
	// });
	// if (!sourceFlag) {
	// 	console.log("404 - source account not found");
	// } else if (!targetFlag) {
	// 	console.log("404 - target account not found");
	// } else {
	// 	console.log("The new status:");
	// 	balance('all');
	// }