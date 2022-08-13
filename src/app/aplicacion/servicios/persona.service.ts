import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, setDoc, getDoc, updateDoc, orderBy, onSnapshot, query, where, getDocs, CollectionReference, docData, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'personas';
  private personaCollection: CollectionReference<Persona>;

  constructor(private firestore: Firestore) {
    this.personaCollection = collection(this.firestore, `${this.url}`);
  }

  obtener() {
    return collectionData(this.personaCollection, {
      idField: 'id',
    }) as Observable<Persona[]>;
  }

  obtnerPorId(id: string) {
    const personaDocumentReference = doc(this.firestore, `${this.url}/${id}`);
    return docData(personaDocumentReference, { idField: 'id' });
  }

  crear(persona: Persona) {
    return addDoc(this.personaCollection, persona);
  }

  editar(persona: Persona) {
    const personaDocumentReference = doc(this.firestore, `${this.url}/${persona.id}`);
    return updateDoc(personaDocumentReference, { ...persona });
  }

  eliminar(id: string) {
    const personaDocumentReference = doc(this.firestore, `${this.url}/${id}`);
    return deleteDoc(personaDocumentReference);
  }


}
