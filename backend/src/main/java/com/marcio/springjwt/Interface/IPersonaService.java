/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Interface;

import com.marcio.springjwt.Entity.Persona;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IPersonaService {
    public List<Persona> getPersonas();
    
    public Persona getPersona(Long id);
    
    public void savePersona(Persona persona);
    
    public void deletePersona(Long id);
    
    public Persona findPersona(Long id);
}
