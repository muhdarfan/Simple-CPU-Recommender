var dict = {
	"TR 3990X (RM 16999)" : ["amd", "high", "workstation"],
	"TR 3970X (RM 8399)" : ["amd", "high", "workstation"],

	"Ryzen 9 5950X (RM 3699)" : ["amd", "high", "gaming"],
	"Ryzen 9 5900X (RM 2499)" : ["amd", "high", "gaming"],

	"Ryzen 7 5800X (RM 2049)" : ["amd", "low", "gaming"],
	"Ryzen 5 5600X (RM 1349)" : ["amd", "low", "gaming"],

	"AMD Athlon 240GE (RM 389)" : ["amd", "low", "basic"],
	"AMD Athlon 200GE (RM 195)" : ["amd", "low", "basic"],

	"Intel Xeon Platinum 8268 (RM 84534)" : ["intel", "high", "workstation"],
	"Intel Xeon Gold 6238R (RM 35077)" : ["intel", "high", "workstation"],

	"Intel Core i9-10980XE (RM 4939)" : ["intel", "high", "gaming"],
	"Intel Core i9-10900X (RM 3079)" : ["intel", "high", "gaming"],

	"Intel Core i9-10900F (RM 2259)" : ["intel", "low", "gaming"],
	"Intel Core i7-10700K (RM 1648)" : ["intel", "low", "gaming"],

	"Intel Pentium G6600 (RM 250)" : ["intel", "low", "basic"],
	"Intel Celeron G5900 (RM 163)" : ["intel", "low", "basic"],	
};

var which_cpu = function(brand, budget, use) {
	let recommendedCPU = [];

	$.each(dict, function(key, value) {
		if (arraysEqual(value, [brand, budget, use]))
			recommendedCPU.push(key);
	});

	return recommendedCPU;
};

// Function to check if 2 arrays is equivalent.
var arraysEqual = function(a, b) {
	return JSON.stringify(a)==JSON.stringify(b);
};

// Main Function.
// Proccessed when user click button submit.
$("#mainForm").submit(function(e) {
	e.preventDefault(); // Prevent from submitting
	$(".cpuResult").html(""); // Clear CPUResult Data

	let data = $(this).serializeArray();
	let recommended = which_cpu(data[0].value, data[1].value, data[2].value);

	// Loop through recommended array data
	$.each(recommended, function(idx, val) {
		$(".cpuResult").append('<li class="list-group-item">' + val + '</li>'); // Append to .cpuResult
	});
	$(".result").show("slow"); // Set result display to visible
});