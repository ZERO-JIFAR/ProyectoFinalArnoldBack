/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Service;

import com.marcio.springjwt.Entity.Skill;
import com.marcio.springjwt.Interface.ISkillService;
import com.marcio.springjwt.Repository.SkillRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService implements ISkillService {
    @Autowired
    private SkillRepository skillRepo;
    @Override
    public List<Skill> getSkills() {
       List<Skill> skills = skillRepo.findAll();
       return skills;
    }

    @Override
    public void saveSkill(Skill skill) {
        skillRepo.save(skill);
    }

    @Override
    public void deleteSkill(Long id) {
        skillRepo.deleteById(id);
    }

    @Override
    public Skill findSkill(Long id) {
       Skill skill = skillRepo.findById(id).orElse(null);
       return skill;
    }
    
}
