import Employe from '#models/employe'
import type { HttpContext } from '@adonisjs/core/http'

export default class EmployesController {

  async index({response}: HttpContext) {
    const employe = await Employe.all();
    return response.status(200).json({data: employe})
  }


  async create({}: HttpContext) {}


  async store({ request, response }: HttpContext) {
    try {
      const employe = new Employe();
      if(employe.email== request.input('email')){
        return response.status(403).json({msg: "empleado ya existe"})
      }
      employe.name = request.input('name');
      employe.email = request.input('email');
      employe.mobile = request.input('mobile');
      employe.bod = request.input('bod');
      employe.doj = request.input('doj');
      employe.address = request.input('address');
      console.log(employe)
      employe.save();

      return response.status(200).json({message:'Employed create successfully',data: employe})
    } catch (error) {
      return response.badRequest(error.message);
    }

  }

 
  async show({ response, params }: HttpContext) {
    const employe = await Employe.find(params.id)
    return response.status(200).json({data: employe})
  }

  
  async edit({ }: HttpContext) {}

  
  async update({ params, request, response }: HttpContext) {
    try {
      const employe = await Employe.findByOrFail(params.id)
      if(employe.email== request.input('email')){
        return response.status(403).json({msg: "empleado ya existe"})
      }
      employe.name = request.input('name');
      employe.email = request.input('email');
      employe.mobile = request.input('mobile');
      employe.bod = request.input('bod');
      employe.doj = request.input('doj');
      employe.address = request.input('address');
      console.log(employe)
      employe.save();

      return response.status(200).json({message:'Employed updated successfully',data: employe})
    } catch (error) {
      return response.badRequest(error.message);
    }
  }

  
  async destroy({ params, response }: HttpContext) {
    const employe = await Employe.findOrFail(params.id)
    await employe.delete()

    return response.status(200).json({msg:"employed delete successfully", data: employe})
  }
}