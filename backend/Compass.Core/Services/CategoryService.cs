using AutoMapper;
using Compass.Core.DTO_s;
using Compass.Core.Entities;
using Compass.Core.Entities.Specification;
using Compass.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compass.Core.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepository<Category> _categoryRepository;
        private readonly IMapper _mapper;
        private readonly IRepository<Course> _courseRepository;
        public CategoryService(IRepository<Category> categoryRepository, IRepository<Course> courseRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _courseRepository = courseRepository;
        }

        public async Task<List<Category>> GetAll()
        {
            var result = await _categoryRepository.GetAll();
            return _mapper.Map<List<Category>>(result);
        }

        public async Task<Category> GetById(object id)
        {
            return await _categoryRepository.GetByID(id);
        }

        public async Task<ServiceResponse> Create(CategoryDto model)
        {
            var spec = await _categoryRepository.GetListBySpec(new Categories.GetByName(model.Name));
            if (spec.Count() == 0)
            {
                await _categoryRepository.Insert(_mapper.Map<Category>(model));
                await _categoryRepository.Save();
                return new ServiceResponse
                {
                    Success = true,
                    Message = "A category was successfully created"
                };
            }
            else
            {
                return new ServiceResponse
                {
                    Success = false,
                    Message = "This category already exists"
                };
            }
        }
        public async Task<ServiceResponse> Delete(int id)
        {
            Course course = await _courseRepository.GetByID(id);
            if (course == null)
            {
                Category category = await _categoryRepository.GetByID(id);
                if (category != null)
                {
                    await _categoryRepository.Delete(category);
                    await _categoryRepository.Save();
                    return new ServiceResponse
                    {
                        Success = true,
                        Message = "The category was successfully deleted"
                    };
                }
                else
                {
                    return new ServiceResponse
                    {
                        Success = false,
                        Message = "The category with the specified ID was not found"
                    };
                }
            }
            else
            {
                return new ServiceResponse
                {
                    Success = true,
                    Message = "Cannot delete. Course exists with the specified ID"
                };
            }
        }
        public async Task<ServiceResponse> Update(CategoryDto model)
        {
            await _categoryRepository.Update(_mapper.Map<Category>(model));
            await _categoryRepository.Save();
            return new ServiceResponse
            {
                Success = true,
                Message = "The category was successfully updated"
            };
        }
    }
}
