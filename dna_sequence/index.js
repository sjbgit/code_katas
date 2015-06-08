
function protein(rna) {

  var dict = {

// Phenylalanine
    'UUC':'F', 'UUU':'F',
    // Leucine
    'UUA':'L', 'UUG':'L', 'CUU':'L', 'CUC':'L','CUA':'L','CUG':'L', 
    // Isoleucine
    'AUU':'I', 'AUC':'I', 'AUA':'I', 
    // Methionine
    'AUG':'M', 
    // Valine
    'GUU':'V', 'GUC':'V', 'GUA':'V', 'GUG':'V', 
    // Serine
    'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'AGU':'S', 'AGC':'S', 
    // Proline
    'CCU':'P', 'CCC':'P', 'CCA':'P', 'CCG':'P', 
    // Threonine
    'ACU':'T', 'ACC':'T', 'ACA':'T', 'ACG':'T',
    // Alanine
    'GCU':'A', 'GCC':'A', 'GCA':'A', 'GCG':'A', 
    // Tyrosine
    'UAU':'Y', 'UAC':'Y', 
    // Histidine
    'CAU':'H', 'CAC':'H',
    // Glutamine
    'CAA':'Q', 'CAG':'Q', 
    // Asparagine
    'AAU':'N', 'AAC':'N', 
    // Lysine
    'AAA':'K', 'AAG':'K',
    // Aspartic Acid
    'GAU':'D', 'GAC':'D', 
    // Glutamic Acid
    'GAA':'E', 'GAG':'E',
    // Cystine
    'UGU':'C', 'UGC':'C',
    // Tryptophan
    'UGG':'W', 
    // Arginine
    'CGU':'R', 'CGC':'R', 'CGA':'R', 'CGG':'R', 'AGA':'R', 'AGG':'R', 
    // Glycine
    'GGU':'G',  'GGC':'G', 'GGA':'G', 'GGG':'G', 
    // Stop codon
    'UAA':'Stop', 'UGA':'Stop', 'UAG':'Stop'


}

  // your code here
  var chunks = rna.match(/.{2,3}/g);

  //console.log(dict);

  return chunks.map(function(chunk) {
  	return dict[chunk];
  }).filter(function(item) {
  	return item != 'Stop';
  }).join('');


}
  

  /*
  function protein(rna){
  return rna.replace(/.{3}/g, function(r){ return dict[r] || '' });
}
*/

  var x = { test: 'xx'};

console.log(protein('AUGUGACGU'));

console.log(x);

//console.log('AUGUGA'.match(/.{2,3}/g));

var dict = {

// Phenylalanine
    'UUC':'F', 'UUU':'F',
    // Leucine
    'UUA':'L', 'UUG':'L', 'CUU':'L', 'CUC':'L','CUA':'L','CUG':'L', 
    // Isoleucine
    'AUU':'I', 'AUC':'I', 'AUA':'I', 
    // Methionine
    'AUG':'M', 
    // Valine
    'GUU':'V', 'GUC':'V', 'GUA':'V', 'GUG':'V', 
    // Serine
    'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'AGU':'S', 'AGC':'S', 
    // Proline
    'CCU':'P', 'CCC':'P', 'CCA':'P', 'CCG':'P', 
    // Threonine
    'ACU':'T', 'ACC':'T', 'ACA':'T', 'ACG':'T',
    // Alanine
    'GCU':'A', 'GCC':'A', 'GCA':'A', 'GCG':'A', 
    // Tyrosine
    'UAU':'Y', 'UAC':'Y', 
    // Histidine
    'CAU':'H', 'CAC':'H',
    // Glutamine
    'CAA':'Q', 'CAG':'Q', 
    // Asparagine
    'AAU':'N', 'AAC':'N', 
    // Lysine
    'AAA':'K', 'AAG':'K',
    // Aspartic Acid
    'GAU':'D', 'GAC':'D', 
    // Glutamic Acid
    'GAA':'E', 'GAG':'E',
    // Cystine
    'UGU':'C', 'UGC':'C',
    // Tryptophan
    'UGG':'W', 
    // Arginine
    'CGU':'R', 'CGC':'R', 'CGA':'R', 'CGG':'R', 'AGA':'R', 'AGG':'R', 
    // Glycine
    'GGU':'G',  'GGC':'G', 'GGA':'G', 'GGG':'G', 
    // Stop codon
    'UAA':'Stop', 'UGA':'Stop', 'UAG':'Stop'


}