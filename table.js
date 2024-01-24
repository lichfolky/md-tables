export function objsToTable(objs) {
    let values = [];

    // find keys
    let keys = findAllKeys(objs);

    // find max values length
    let maxSizes = findMaxValueOrKeyLength(objs, keys);

    let table = '| ' + keys.map((e, index) => emptyFill(e, maxSizes[index])).join(' | ') + ' |\n';
    table += '|' + maxSizes.map(size => " " + "-".repeat(size) + " ").join("|") + "|\n";
    table += objs.map(e => tableRow(e, keys, maxSizes)).join('\n');
    return table;
}

function findAllKeys(objs) {
    let keysSet = new Set();
    for (const obj of objs) {
        for (const key in obj) {
            keysSet.add(key);
        }
    }
    return Array.from(keysSet);
}

function findMaxValueOrKeyLength(objs, keys) {
    let maxSizes = keys.map(e => e.length);
    for (const obj of objs) {
        for (const [index, value] of keys.entries()) {
            maxSizes[index] = Math.max(maxSizes[index], obj[value].length);
        }
    }
    return maxSizes;
}

function tableRow(values, keys, maxSizes) {
    let valuesStr = [];
    for (const [i, title] of keys.entries()) {
        valuesStr.push(emptyFill(values[title], maxSizes[i]));
    }
    return "| " + valuesStr.join(' | ') + " |";
}

function emptyFill(value, size) {
    if (size >= value.length) {
        return value + " ".repeat(size - value.length);
    } else {
        return "";
    };
}

export function tableToObj(table) {
    let lines = table.trim().split("\n").map(line => line.split("|").slice(1, -1).map(e => e.trim()));
    let keys = lines[0].map(e => e.trim());
    lines = lines.splice(2).map(line => {
        let obj = {};
        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = line[i];
        }
        return obj;
    });
    return lines;
}

