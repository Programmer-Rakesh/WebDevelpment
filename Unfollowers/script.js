let cities = [ "pritam_0917", "aaron_mojumder", "dinkssss__", "ashwani_kumar.01", "akrshittt_hahaha", "_animesh_sah_", "spandannn._", "abhinav_subba07", "anmolthapaaaaaa", "apoorvakharga", "suresh_rana_i", "jyotishkumar_afmc", "khaling5624", "nishantch_07_", "abner_frait", "_v.r.u.s.h.a.n.k_", "_aniket_chettri", "aarynn.fr", "_akrxhit_", "isr0shar", "_anmolthapa_", "_prashant_chettri_76", "deipu_seingh", "integral_arghya"];

let heroes = [ "pritam_0917", "akrshittt_hahaha", "dinkssss__", "abhinav_subba07", "_aniket_chettri", "_prashant_chettri_76", "aarynn.fr", "spandannn._", "jyotishkumar_afmc", "suresh_rana_i", "_anmolthapa_", "nishantch_07_", "isr0shar", "deipu_seingh", "integral_arghya", "abner_frait", "_v.r.u.s.h.a.n.k_", "_akrxhit_", "anmolthapaaaaaa", "apoorvakharga", "khaling5624", "basanglo_yun_", "the_cook_who_lifts", "yami_puri", "preeti_yumnam_", "thegalleryofmanipur", "_animesh_sah_", "aaron_mojumder", "ashwani_kumar.01", "frozenn_99", "zone5av", "aviavault", "acepilotaviation" ];

let setCities = new Set(cities);
let setHeroes = new Set(heroes);

let uncommon = [
    ...cities.filter(city => !setHeroes.has(city)),
    ...heroes.filter(hero => !setCities.has(hero))
];

console.log("Uncommon elements:", uncommon);
