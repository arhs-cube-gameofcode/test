package com.arhs.cube.warriors.service;

import com.arhs.cube.warriors.domain.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Service Interface for managing Tag.
 */
public interface TagService {

    /**
     * Save a tag.
     * @return the persisted entity
     */
    public Tag save(Tag tag);

    /**
     *  get all the tags.
     *  @return the list of entities
     */
    public Page<Tag> findAll(Pageable pageable);

    /**
     *  get the "id" tag.
     *  @return the entity
     */
    public Tag findOne(Long id);

    /**
     *  delete the "id" tag.
     */
    public void delete(Long id);
}
