const StringFormatter = function () {
    
    const capitalizeFirst = function (str) { 
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const toSkewerCase = function (str) {
        return str.toLowerCase().replaceAll(" ", "-");
    }

    return { 
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const sf = StringFormatter();

console.log(sf.capitalizeFirst("dorothy"));
console.log(sf.toSkewerCase("blue box"));