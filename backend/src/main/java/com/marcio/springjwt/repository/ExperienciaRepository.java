/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Repository;



import com.marcio.springjwt.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Usuario
 */
public interface ExperienciaRepository extends JpaRepository<Experiencia,Long> {
    
}
