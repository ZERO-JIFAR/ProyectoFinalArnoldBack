/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Interface;

import com.marcio.springjwt.Entity.Proyecto;
import java.util.List;


public interface IProyectoService {
    
     public List<Proyecto> getProyecto();
    public void saveProyecto(Proyecto proy);
    public void deleteProyecto(Long id);
    public Proyecto findProyecto(Long id);
    
    
}
