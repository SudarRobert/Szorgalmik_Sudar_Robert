import { Component } from '@angular/core';

@Component({
  selector: 'app-helsinki-tablazatos',
  templateUrl: './helsinki-tablazatos.component.html',
  styleUrls: ['./helsinki-tablazatos.component.css']
})
export class HelsinkiTablazatosComponent {
  helyezes: number = 1;
  csapatMeret: number = 1;
  sportag: string = '';
  versenySzam: string = '';

  megjelenito: boolean = false;

  keresoHelyezes: number | null = null;
  keresoMeret: number | null = null;
  keresoSportag: string = '';
  keresoVerseny: string = '';

  feltoltoMegjelenito() {
    this.megjelenito = !this.megjelenito;
  }

  ujEredmenyHozzaad() {
    if (this.helyezes == null || this.csapatMeret == null || this.sportag.trim() === '' || this.versenySzam.trim() === '') {
      alert("Minden mező kitöltése kötelező!");
    } else {
      this.helsinkiAdatok.push({
        helyezes: this.helyezes,
        csapatMeret: this.csapatMeret,
        sportag: this.sportag,
        versenySzam: this.versenySzam
      });
    }
  }

  osszesSzuresiFeltetelTorlese() {
    this.keresoHelyezes = null;
    this.keresoMeret = null;
    this.keresoSportag = '';
    this.keresoVerseny = '';
  }

  eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajakkenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajakkenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
  ];

  helsinkiAdatok = this.ObjektumFeltolto(this.eredmenyek);

  ObjektumFeltolto(feltoltendoElem: string[]) {
    const beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
      let daraboltSor = feltoltendoElem[i].split(" ");
      const helsinikiElem = {
        helyezes: Number(daraboltSor[0]),
        csapatMeret: Number(daraboltSor[1]),
        sportag: daraboltSor[2],
        versenySzam: daraboltSor.slice(3).join(" ")
      };
      beolvasottAdatok.push(helsinikiElem);
    }
    return beolvasottAdatok;
  }

  get szurtElemek() {
    return this.helsinkiAdatok.filter(megjelenitendoAdatok =>
      (this.keresoHelyezes == null || this.keresoHelyezes === megjelenitendoAdatok.helyezes) &&
      (this.keresoMeret == null || this.keresoMeret === megjelenitendoAdatok.csapatMeret) &&
      (this.keresoSportag.trim() === '' || megjelenitendoAdatok.sportag.toLowerCase().includes(this.keresoSportag.toLowerCase())) &&
      (this.keresoVerseny.trim() === '' || megjelenitendoAdatok.versenySzam.toLowerCase().includes(this.keresoVerseny.toLowerCase()))
    );
  }
}

