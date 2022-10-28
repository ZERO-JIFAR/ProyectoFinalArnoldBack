/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.marcio.springjwt.Service;

import com.marcio.springjwt.Entity.Banner;
import com.marcio.springjwt.Interface.IBannerService;
import com.marcio.springjwt.repository.BannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BannerService implements IBannerService{
   @Autowired
    private BannerRepository bannerRep;
    @Override
    public Banner getBanner(Long id) {
     Banner b = bannerRep.findById(id).orElse(null);
     return b;
    }

    @Override
    public void saveBanner(Banner banner) {
    bannerRep.save(banner);
    }

    @Override
    public Banner findBanner(Long id) {
        Banner b = bannerRep.findById(id).orElse(null);
       return b;
    }
    
}
